import React, { useEffect, useState } from 'react';
import './GraderPage.css';
import axios from 'axios';

function GraderPage() {
    
    //click effect
    useEffect(() => {
        const buttons = document.querySelectorAll('.graderButtons button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }, []);

    return (
        <div>
            <div className='actGraderBody'>
                <div className='inputSection'>
                    <div className='promptSection'>
                        <h1>Prompt</h1>
                        <textarea placeholder='Enter your prompt here'></textarea>
                    </div>

                    <div className='responseSection'>
                        <h1>Response</h1>
                        <textarea placeholder='Enter your response here'></textarea>
                    </div>

                    <div>
                        <h1>FRQ Type</h1>
                    </div>

                    <div className='graderOptions'>

                        <div className='worldOption'>
                            <p>AP World History</p>

                            <div className='graderButtons'>
                                <button>LEQ</button>
                                <button>SAQ</button>
                            </div>
                        </div>

                        <div className='apushOption'>
                            <p>AP US History</p>

                            <div className='graderButtons'>
                                <button>LEQ</button>
                                <button>SAQ</button>
                            </div>
                        </div>

                        <div className='euroOption'>
                            <p>AP Euro History</p>

                            <div className='graderButtons'>
                                <button>LEQ</button>
                                <button>SAQ</button>
                            </div>
                        </div>

                        <div className='langOption'>
                            <p>AP English Language</p>

                            <div className='graderButtons'>
                                <button>Argument Essay</button>
                            </div>
                        </div> {/* end of langOption */}
                    </div> {/* end of graderOptions */}

                    <div className='submitSection'>
                        <button className='submitButton'>Submit</button>
                    </div>
                </div> {/* end of inputSection */}

                <div className='outputSection'>

                    <div className='scoreSection'>
                        <h1>Points earned:</h1>
                        <h2 className='points'>0</h2>
                    </div>

                    <div className='feedbackSection'>
                        <h1>Feedback</h1>
                        <div className='feedbackTxt'>
                            <p>Your feedback will appear here</p>
                        </div>
                    </div>
                </div>
                
            </div> {/* end of actGraderBody */}
        </div>
        
    )
}

export default GraderPage;