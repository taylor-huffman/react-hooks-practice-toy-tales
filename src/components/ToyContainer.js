import React from "react";
import ToyCard from "./ToyCard";

function ToyContainer({ toys, handleDeleteToy, handleAddLike }) {
  return (
    <div id="toy-collection">{toys.map(toy => {
      return <ToyCard key={toy.id} toy={toy} handleDeleteToy={handleDeleteToy} handleAddLike={handleAddLike} />
    })}</div>
  );
}

export default ToyContainer;
