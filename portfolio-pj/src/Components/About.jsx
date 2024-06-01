import React from 'react';
import { Link } from 'react-router-dom';
function About() {

    return (
        <div>
        <div className='about'>
            
            
            
        <div className="Marcus-Browne">
        <img src="https://ca.slack-edge.com/TCVA3PF24-U063SFA1DN3-1f2158372ace-512" alt="Marcus Browne" /><br />
        <h1>Marcus Browne</h1> <br />
        <p>Marcus, a native of Montserrat, thrives on two passions: fitness and gaming. When he's not sculpting his physique in the gym, Marcus is mastering HTML, JavaScript, React, and CSS as a skilled web developer. With a competitive spirit and a drive for excellence, Marcus approaches each challenge with enthusiasm and determination, leaving his mark wherever he goes.</p><br />
        <a href="https://github.com/MarcusB86">Github</a>

        </div>
        
        </div>
        <Link to="/">Back to Home</Link>

        </div>
    );
};

export default About;