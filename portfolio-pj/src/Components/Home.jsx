import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
    const [searchPeople, setSearchPeople] = useState('');
    const [people, setPeople] = useState([]);

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

    function handleSearchSubmit(event) {
        event.preventDefault();
        fetch('https://swapi.dev/api/people/')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch people');
                }
                return response.json();
            })
            .then(data => {
                if (data.results.length === 0) {
                    throw new Error('No people found');
                }
                const peopleData = data.results.map(item => ({
                    name: item.name,
                    height: item.height,
                    mass: item.mass,
                    hair_color: item.hair_color,
                    skin_color: item.skin_color,
                    eye_color: item.eye_color,
                    birth_year: item.birth_year,
                    gender: item.gender,
                    homeworld: item.homeworld,
                    films: item.films
                }));
                setPeople(peopleData);
            })
            .catch(error => {
                console.error('Error fetching people:', error);
                setPeople([]);
            });
    }

    return (
        <div>
            <form onSubmit={handleSearchSubmit}>
                <input
                    type="text"
                    placeholder="Search for people..."
                    value={searchPeople}
                    onChange={(event) => setSearchPeople(event.target.value)}
                />
                <button type="submit">Search</button>
            </form>
            <div className="page-container">
                {people.length > 0 ? (
                    people.map((character, index) => (
                        <Link to={`/showpage/${index}`} key={index}>
                            <div>
                                <p>{character.name}</p>
                            </div>
                        </Link>
                    ))
                ) : (
                    data.results.map((character, index) => (
                        <Link to={`/showpage/${index}`} key={index}>
                            <div>
                                <p>{character.name}</p>
                            </div>
                        </Link>
                    ))
                )}
            </div>
        </div>
    );
}