import React from 'react';
import './Grade.css';
import { Link } from 'react-router-dom';

function Grade() {
    return (
        <div>
            <div class="graderTitle">
                <h1>Grader</h1>
                <p>Get a score and feedback on your writing!</p>
            </div>

            <div className='graderBody'>
                <h1>How to use</h1>

                <div>
                    <Link to="../GraderPage">Grader page</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Grade;