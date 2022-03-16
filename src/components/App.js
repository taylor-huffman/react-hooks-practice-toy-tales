import React, { useState, useEffect } from "react";

import Header from "./Header";
import ToyForm from "./ToyForm";
import ToyContainer from "./ToyContainer";

const API = 'http://localhost:3001/toys'

function App() {
  const [showForm, setShowForm] = useState(false);
  const [toys, setToys] = useState([])


  useEffect(() => {
    fetch(API)
    .then(r => r.json())
    .then(toys => setToys(toys))
  }, [])


  function handleAddToy(newToy) {
    fetch(API, {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(newToy)
    })
    .then(r => r.json())
    .then(toy => setToys([...toys, toy]))
  }


  function handleDeleteToy(deletedToy) {

    const toyFilter = toys.filter(toy => toy.id !== deletedToy.id)

    fetch(`${API}/${deletedToy.id}`, {
      method: 'DELETE',
    })
    .then(r => r.json())
    .then(() => setToys(toyFilter))
  }


  function handleAddLike(likedToy) {
    fetch(`${API}/${likedToy.id}`, {
      method: 'PATCH',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(likedToy)
    })
    .then(r => r.json())
    .then(toy => console.log(toy))
  }


  function handleClick() {
    setShowForm((showForm) => !showForm);
  }

  return (
    <>
      <Header />
      {showForm ? <ToyForm handleAddToy={handleAddToy} /> : null}
      <div className="buttonContainer">
        <button onClick={handleClick}>Add a Toy</button>
      </div>
      <ToyContainer toys={toys} handleDeleteToy={handleDeleteToy} handleAddLike={handleAddLike} />
    </>
  );
}

export default App;
