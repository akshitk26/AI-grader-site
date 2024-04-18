import React from 'react';
// import './Grade.css';
import { Link } from 'react-router-dom';

function Grade() {
    return (
        <div>
            <div class="graderTitle">
                <h1>Grader</h1>
                <p>Get a score and feedback on your writing!</p>
            </div>

            <div className='graderBody'>

                <div className='grade1'>
                    <div className='gradeStepContent'>
                        <div className='gradeStepTitle' id='grade1title'>
                            <p>Entering grading parameters</p>
                        </div>

                        <div className='stepBody' id='grade1body'>
                            <p>Paste the question into the 'Prompt' input box. Formulate a response and paste that
                                into the 'Response' input box directly below. Select the appropriate subject
                                and the question type of the prompt, and then click 'Submit'.
                            </p>
                        </div>
                    </div> 

                    <div className='grade1Image'>
                        image here 
                    </div>
                </div>

                <div className='grade2'>

                    <div className='grade2Image'>
                        image here 
                    </div>

                    <div className='gradeStepContent'>
                        <div className='gradeStepTitle' id='grade2title'>
                            <p>Interpretting AI Output</p>
                        </div>

                        <div className='stepBody' id='grade2body'>
                            <p>The AI is designed to evaluate responses strictly based on AP rubric guidelines. 
                                It will return a number next to 'Points' and a qualitative analysis 
                                of the response, providing feedback on how you did well and how you can improve.

                                <br></br>
                                <br></br>

                                The number indicates the amount of points the response would earn according to the rubric 
                                or criteria of the prompt. The image to the left shows a sample response to an AP World
                                LEQ; it earned 2 out of a total of 3  points, and the AI provides suggestions 
                                on how to change the response so that it earns all the possible points.
                            </p>
                        </div>
                    </div> 
                </div>

                <div className='grade3'>
                    <div className='gradeStepContent'>
                        <div className='gradeStepTitle' id='grade3title'>
                            <p>Step 3</p>
                        </div>

                        <div className='stepBody' id='grade3body'>
                            <p>Paste prompt into the input box :)</p>
                        </div>
                    </div> 

                    <div className='grade3Image'>
                        image here 
                    </div>
                </div>

                <div>
                    <Link to="../GraderPage">Go to the grader</Link>
                </div>
            </div>
        </div>
        
    )
}

export default Grade;