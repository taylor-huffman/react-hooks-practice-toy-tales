import React, { useState } from "react";

function ToyForm({ handleAddToy }) {

  const [formData, setFormData] = useState({
    name: '',
    image: '',
  })

  function handleOnChange(e) {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  function handleOnSubmit(e) {

    const formDataWithLikes = {
      ...formData,
      likes: 0,
    }

    e.preventDefault()
    handleAddToy(formDataWithLikes)
    setFormData({
      name: '',
      image: '',
    })
  }

  return (
    <div className="container">
      <form onSubmit={handleOnSubmit} className="add-toy-form">
        <h3>Create a toy!</h3>
        <input
          type="text"
          name="name"
          value={formData.name}
          placeholder="Enter a toy's name..."
          className="input-text"
          onChange={handleOnChange}
        />
        <br />
        <input
          type="text"
          name="image"
          value={formData.image}
          placeholder="Enter a toy's image URL..."
          className="input-text"
          onChange={handleOnChange}
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
