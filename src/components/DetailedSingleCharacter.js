import React from "react";

const DetailedSingleCharacter = (props) => {
  const {
    name,
    aliases,
    real_name,
    deck,
    image,
    gender,
    franchises,
    first_appeared_in_game,
  } = props.selectedCharacter;
  return (
    <div id="detailed-single-character">
      <h2>{name}</h2>
      <img src={image.medium_url} />
      <p>Aliases: {aliases}</p>
      <p>Real Name: {real_name}</p>
      <p>Gender: {gender === 1 ? "Male" : "Female"}</p>
      <p>First Game Appearance: {first_appeared_in_game.name}</p>
      <p>Description: {deck === null ? "No description available" : deck}</p>
    </div>
  );
};

export default DetailedSingleCharacter;
