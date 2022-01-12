import React from "react";

export const SingleCharacter = (props) => {
  const { character, selectCharacter } = props;
  const { name, first_appeared_in_game, image, id } = character;
  return (
    <tr id="tr-character" onClick={() => selectCharacter(id)}>
      <td>{name}</td>
      <td>{first_appeared_in_game.name}</td>
      <td>
        <img src={image.icon_url} />
      </td>
    </tr>
  );
};

export default SingleCharacter;
