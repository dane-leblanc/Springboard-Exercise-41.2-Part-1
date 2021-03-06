import React from "react";
import { useParams, Navigate } from "react-router-dom";
import "./DogDetails.css";

function DogDetails({ dogs }) {
  const { name } = useParams();
  const dog = dogs.filter((dog) => dog.name.toLowerCase() === name)[0];

  if (!dog) return <Navigate to="/dogs" replace />;

  const dogFacts = dog.facts.map((fact, i) => <p key={i}>{fact}</p>);

  return (
    <div className="DogDetails">
      <h1>These are {dog.name}'s details.</h1>
      <div className="DogDetails-specs">
        <img src={dog.src} alt={dog.name} width="400" />
        <div className="DogDetails-text">
          <p>Age: {dog.age}</p>
          <div className="DogDetails-facts">{dogFacts}</div>
          <p>
            <a href="/dogs">Back Home</a>
          </p>
        </div>
      </div>
    </div>
  );
}

export default DogDetails;
