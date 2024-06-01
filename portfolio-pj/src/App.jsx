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
                {/* <Route path="/header" element={<Header />} /> */}
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





// import { useState } from 'react';
// import './App.css';
// // import Header from './Components/Header';
// import About from './Components/About';
// // import Footer from './Components/Footer';
// import ShowPage from './Components/ShowPage';
// import Home from './Components/Home';
// import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


//   function App() {
//     return (
//       <div>
//         <Router>
//           <Routes>
//             <Route exact path="/" element={<Home />} />
//             <Route path="/ShowPage/:index" element={<ShowPage/>}/>
//             <Route path="/About" element={<About/>} />
//           </Routes>
//         </Router>
//       </div>
//     )
//   }
  
//   export default App


















//   return (
//     <Router>
//       <div className="App">
//         <Header />
//         <nav>
//           <ul>
//             <li><Link to="/">Home</Link></li>
//             <li><Link to="/about">About Me</Link></li>
//             <li><Link to="/form">Form</Link></li>
//           </ul>
//         </nav>
//         <main>
//           <Routes>
//             {/* <Route path="/" element={<Home />} /> */}
//             <Route exactpath="/about" element={<About />} />
//             {/* <Route path="/form" element={<Form />} /> */}
//             {/* <Route path="/show/" element={<ShowPage />} /> */}
//           </Routes>
//         </main>
//         {/* <Footer /> */}
//       </div>
//     </Router>
//   );
// }

// export default App;
