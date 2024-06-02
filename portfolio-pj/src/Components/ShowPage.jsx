import React from 'react';
import { useParams, Link } from 'react-router-dom';
import './ShowPage.css';

function ShowPage({ people }) {
    const { index } = useParams();
    const character = people[index];

    if (!character) {
        return <div>Character not found</div>;
    }

    return (
        <div className="character-details">
            <h1>{character.name}</h1>
            <p><strong>Height:</strong> {character.height} cm</p>
            <p><strong>Mass:</strong> {character.mass} kg</p>
            <p><strong>Hair Color:</strong> {character.hair_color}</p>
            <p><strong>Skin Color:</strong> {character.skin_color}</p>
            <p><strong>Eye Color:</strong> {character.eye_color}</p>
            <p><strong>Birth Year:</strong> {character.birth_year}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <Link to="/" className="back-link">Back to Home</Link>
        </div>
    );
}

export default ShowPage;
