import { useState } from 'react';
import './App.css';
// import Header from './Components/Header';
import About from './Components/About';
// import Footer from './Components/Footer';
import ShowPage from './Components/ShowPage';
import Home from './Components/Home';
// import Form from './Components/Form';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';


  function App() {
    return (
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="/ShowPage/:index" element={<ShowPage/>}/>
            <Route path="/About" element={<About/>} />
          </Routes>
        </Router>
      </div>
    )
  }
  
  export default App


















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
