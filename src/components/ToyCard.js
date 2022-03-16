import React, { useState } from "react";

function ToyCard({ toy, handleDeleteToy, handleAddLike }) {

  const {name, image, likes} = toy
  const [likeCount, setLikeCount] = useState(likes)

  function handleDeleteOnClick() {
    handleDeleteToy(toy)
  }

  function handleLikeOnClick() {
    setLikeCount(likeCount => likeCount + 1)
    handleAddLike({...toy, likes: likeCount + 1})
  }

  return (
    <div className="card">
      <h2>{name}</h2>
      <img
        src={image}
        alt={name}
        className="toy-avatar"
      />
      <p>{likeCount} Likes </p>
      <button onClick={handleLikeOnClick} className="like-btn">Like {"<3"}</button>
      <button onClick={handleDeleteOnClick} className="del-btn">Donate to GoodWill</button>
    </div>
  );
}

export default ToyCard;
