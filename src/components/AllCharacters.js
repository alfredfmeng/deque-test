import React from "react";
import SingleCharacter from "./SingleCharacter";

export default function AllCharacters(props) {
  const { characters, selectCharacter, clickHandler } = props;
  return (
    <div>
      <table>
        <tbody>
          <tr id="tr-header">
            <th id="th-name" onClick={(evt) => clickHandler(evt)}>
              Name
            </th>
            <th id="th-FGA" onClick={(evt) => clickHandler(evt)}>
              First Game Appearance
            </th>
            <th id="th-img">Image</th>
          </tr>
          {characters.map((character) => {
            return (
              <SingleCharacter
                key={character.id}
                character={character}
                selectCharacter={selectCharacter}
              />
            );
          })}
        </tbody>
      </table>
    </div>
  );
}
