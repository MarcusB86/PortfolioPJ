import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import About from './Components/About';
import ShowPage from './Components/ShowPage';
import Header from './Components/Header';
import Form from './Components/Form';



function App() {
    const [people, setPeople] = useState([]);

    useEffect(() => {
        fetch('https://swapi.dev/api/people/')
            .then(response => response.json())
            .then(data => setPeople(data.results))
            .catch(error => console.error('Error fetching people:', error));
    }, []);

    return (
        <Router>
            <div>
                <Header/>
            <Routes>
                <Route path="/form" element={<Form />} />
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route
                    path="/showpage/:index"
                    element={<ShowPage people={people} />}
                />
            </Routes>
            </div>
        </Router>
    );
}

export default App;