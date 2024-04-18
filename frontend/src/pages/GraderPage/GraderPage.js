import React, { useEffect, useState } from 'react';
// import './GraderPage.css';
import axios from 'axios';

import rubrics from '../../assets/rubrics';

function GraderPage() {
    
    //button click effect
    useEffect(() => {
        const buttons = document.querySelectorAll('.graderButtons button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }, []);

    //vars for all input fields
    const [promptText, setPromptText] = useState('');
    const [responseText, setResponseText] = useState('');
    const [activeEssayType, setActiveEssayType] = useState('');

    //output field vars
    const [feedback, setFeedback] = useState('Your feedback will appear here');
    const [score, setScore] = useState('0');  // You'll need to add a new state variable for the score

    //API call method to get grader output
    const getGraderOutput = async () => {
        const rubric = typeof rubrics[activeEssayType] === 'function'
            ? rubrics[activeEssayType]()
            : rubrics[activeEssayType];

            try {
                const response = await axios.post('http://localhost:5000/api/grader', { prompt: promptText, response: responseText, rubric: rubric });
                if (response && response.data) {
                    const feedback = response.data.output;
                    setFeedback(feedback);
        
                    const score = response.data.score;
                    console.log('Score from API:', score);
                    setScore(score);  // You'll need to add a new state variable for the score
                } else {
                    console.error('Invalid response:', response);
                }
            } catch (error) {
                console.error(error);
            }
    }

    return (
        <div>
            <div className='actGraderBody'>
                <div className='inputSection'>
                    <div className='promptSection'>
                        <h1>Prompt</h1>
                        <textarea placeholder='Enter your prompt here' value={promptText} onChange={e => setPromptText(e.target.value)}></textarea>
                    </div>

                    <div className='responseSection'>
                        <h1>Response</h1>
                        <textarea placeholder='Enter your response here' value={responseText} onChange={e => setResponseText(e.target.value)}></textarea>
                    </div>

                    <div>
                        <h1>FRQ Type</h1>
                    </div>

                    <div className='graderOptions'>

                        <div className='worldOption'>
                            <p>AP World History</p>

                            <div className='graderButtons'>
                            <button onClick={() => {
                                setActiveEssayType('worldLEQ');
                            }}>LEQ</button>  
                            <button onClick={() => {
                                setActiveEssayType('worldSAQ');
                            }}>SAQ</button>
                            </div>
                        </div>

                        <div className='apushOption'>
                            <p>AP US History</p>

                            <div className='graderButtons'>
                            <button onClick={() => {
                                setActiveEssayType('apushLEQ');
                            }}>LEQ</button>  
                            <button onClick={() => {
                                setActiveEssayType('apushSAQ');
                            }}>SAQ</button>
                            </div>
                        </div>

                        <div className='euroOption'>
                            <p>AP Euro History</p>

                            <div className='graderButtons'>
                            <button onClick={() => {
                                setActiveEssayType('euroLEQ');
                            }}>LEQ</button>  
                            <button onClick={() => {
                                setActiveEssayType('euroSAQ');
                            }}>SAQ</button>
                            </div>
                        </div>

                        <div className='langOption'>
                            <p>AP English Language</p>

                            <div className='graderButtons'>
                            <button onClick={() => {
                                setActiveEssayType('argument');
                            }}>Argument Essay</button>  
                            </div>

                        </div> {/* end of langOption */}
                    </div> {/* end of graderOptions */}

                    <div className='submitSection'>
                        <button className='submitButton' onClick={() => {getGraderOutput();}}
                        >Submit</button>
                    </div>
                </div> {/* end of inputSection */}

                <div className='outputSection'>

                    <div className='scoreSection'>
                        <h1>Points earned:</h1>
                        <div className='scoreBox'>
                            {score === null ? <h2>0</h2> : <h2>{score}</h2>}
                        </div>
                    </div>

                    <div className='feedbackSection'>
                        <h1>Feedback</h1>
                        <div className='feedbackTxt'>
                            {feedback === '' ? <p>Your feedback will appear here</p> : <pre>{feedback}</pre>}
                        </div>
                    </div>
                </div>
                
            </div> {/* end of actGraderBody */}
        </div>
        
    )
}

export default GraderPage;