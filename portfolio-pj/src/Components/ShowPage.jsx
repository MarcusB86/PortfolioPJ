import React from 'react';
import { useParams, Link } from 'react-router-dom';

const data = {
    "count": 82,
    "next": "https://swapi.dev/api/people/?page=2",
    "previous": null,
    "results": [
        {
            "name": "Luke Skywalker",
            "height": "172",
            "mass": "77",
            "hair_color": "blond",
            "skin_color": "fair",
            "eye_color": "blue",
            "birth_year": "19BBY",
            "gender": "male",
            "homeworld": "https://swapi.dev/api/planets/1/",
            "films": [
                "https://swapi.dev/api/films/1/",
                "https://swapi.dev/api/films/2/",
                "https://swapi.dev/api/films/3/",
                "https://swapi.dev/api/films/6/"
            ]
        }
    ]
};

function ShowPage() {
    const { index } = useParams();
    const character = data.results[index];

    if (!character) {
        return <div>Character not found</div>;
    }

    return (
        <div>
            <h1>{character.name}</h1>
            <p><strong>Height:</strong> {character.height} cm</p>
            <p><strong>Mass:</strong> {character.mass} kg</p>
            <p><strong>Hair Color:</strong> {character.hair_color}</p>
            <p><strong>Skin Color:</strong> {character.skin_color}</p>
            <p><strong>Eye Color:</strong> {character.eye_color}</p>
            <p><strong>Birth Year:</strong> {character.birth_year}</p>
            <p><strong>Gender:</strong> {character.gender}</p>
            <Link to="/">Back to Home</Link>
        </div>
    );
};

export default ShowPage;