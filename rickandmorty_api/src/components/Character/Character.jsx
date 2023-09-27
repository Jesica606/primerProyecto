import { useEffect, useState } from "react";
import "./character.css";
import { useCharacter } from "../../hooks/useCharacter";

export function Character() {
  const { getAllCharacters, allCharacters } = useCharacter();

  // useEffect y useState Hooks
  useEffect(() => {
    getAllCharacters();
  }, []);
  //useEffect recibe una funcion callback, es decir el codigo a ejecutar
  // recibe cuando se va a ejecutar

  return (
    <ul>
      {allCharacters.map((item, index) => (
        <li key={index}>
          <li id="fila">
            <h3>{item.name}</h3>
            <p>{item.status}</p>
            <p>{item.species}</p>
            <h4> Last Known Location: </h4>
            <p>{item.location["name"]}</p>
            <h4>First seen in: </h4>
            <p>{item.origin["name"]}</p>
          </li>
          <img src={item.image} alt="" />
        </li>
      ))}
    </ul>
  );
}
