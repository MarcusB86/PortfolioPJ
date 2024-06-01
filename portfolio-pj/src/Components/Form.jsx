import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
// import'./Home.css'

export default function Form() {
    const [searchPeople, setSearchPeople] = useState('');
    const [people, setPeople] = useState([]);
    const [allPeople, setAllPeople] = useState([]);

    useEffect(() => {
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
                setAllPeople(data.results);
                setPeople(data.results);
            })
            .catch(error => {
                console.error('Error fetching people:', error);
                setPeople([]);
            });
    }, []);

    function handleSearchSubmit(event) {
        event.preventDefault();
        const filteredPeople = allPeople.filter(person =>
            person.name.toLowerCase().includes(searchPeople.toLowerCase())
        );
        setPeople(filteredPeople);
    }

    return (
        <div>
            <div className="container">
                <div className="form-container">
                    <form onSubmit={handleSearchSubmit}>
                        <input
                            type="text"
                            placeholder="Search for people..."
                            value={searchPeople}
                            onChange={(event) => setSearchPeople(event.target.value)}
                        />
                        <button type="submit">Search</button>
                    </form>
                </div>
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
                        <p>No people found</p>
                    )}
                </div>
            </div>
        </div>
    );
}
