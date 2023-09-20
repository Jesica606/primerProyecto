import { useEffect, useState } from "react";
import "./character.css";

export function Character() {
  const [character, setCharacter] = useState([]);

  // useEffect y useState Hooks
  useEffect(() => {
    fetch("https://rickandmortyapi.com/api/character")
      .then((response) => response.json())
      .then((data) => setCharacter(data.results));
  }, [setCharacter]);
  //useEffect recibe una funcion callback, es decir el codigo a ejecutar
  // recibe cuando se va a ejecutar

  return (
    <ul>
      {character.map((item, index) => (
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
