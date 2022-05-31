import React from "react";
import "./DogList.css";

function DogList({ dogs }) {
  const dogCards = dogs.map((dog) => (
    <div>
      <a href={`/dogs/${dog.name.toLowerCase()}`}>
        <img src={dog.src} alt={dog.name} width="200" />
      </a>
      <p>
        <a href={`/dogs/${dog.name.toLowerCase()}`}>{dog.name}</a>
      </p>
    </div>
  ));

  return <div className="DogList">{dogCards}</div>;
}

export default DogList;
