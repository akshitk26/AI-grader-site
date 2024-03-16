// frontend\src\pages\Generate\Generate.js
// This is the page where users can generate a prompt for AI to grade.
import './Generate.css';
import '../../Theme.css';
import prompts from '../../assets/prompts';
import instructions from '../../assets/instructions';

import React, { useEffect, useState } from 'react';
import axios from 'axios';

function Generate() {

    //button effect when clicked
    useEffect(() => {
        const buttons = document.querySelectorAll('.buttons button');
        buttons.forEach(button => {
            button.addEventListener('click', function() {
                buttons.forEach(btn => btn.classList.remove('active'));
                this.classList.add('active');
            });
        });
    }, []);


    const [aiOutput, setAiOutput] = useState('');
    const [activeEssayType, setActiveEssayType] = useState('');
    const [activeInstructions, setActiveInstructions] = useState('');

    // method to send prompt into openAI api in backend and print the response in the textSection
    const getAIOutput = async () => {
        const prompt = typeof prompts[activeEssayType] === 'function' 
            ? prompts[activeEssayType]() 
            : prompts[activeEssayType];
        const instruction = typeof instructions[activeInstructions] === 'function' 
            ? instructions[activeInstructions]() 
            : instructions[activeInstructions];

        try {
            const response = await axios.post('http://localhost:5000/api/openai', { prompt: prompt, instructions: instruction });
            if (response && response.data && response.data.output) {
                setAiOutput(response.data.output);
            } else {
                console.error('Invalid response:', response);
            }
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <div>
            <div class="title">
                <h1>Prompt Generator</h1>
                <p>Generate a prompt for AI to grade.</p>
            </div>
            <div class="body">


                <div class="description">
                    <label for="subject">Pick a subject and FRQ type to get a question you can practice with!</label>
                </div>


                <div class="options">

                    <div class="apWorld">
                        {/*ap world box*/}
                        <label for="apWorld">AP World History</label>
                        <div class="buttons">
                        <   button onClick={() => {
                                setActiveEssayType('worldLEQ');
                                setActiveInstructions('worldLEQinst');
                            }}>LEQ</button>
                            <button onClick={() => {
                                setActiveEssayType('worldSAQ');
                                setActiveInstructions('worldSAQinst');
                            }}>SAQ</button>
                        </div>
                    </div>

                    {/*ap ush box*/}
                    <div class="apUSH">
                        <label for="apUSH">AP US History</label>
                        <div class="buttons">
                            <button onClick={() => {
                                setActiveEssayType('apushLEQ');
                                setActiveInstructions('apushLEQinst');
                            }}>LEQ</button>  
                            <button onClick={() => {
                                setActiveEssayType('apushSAQ');
                                setActiveInstructions('apushSAQinst');
                            }}>SAQ</button>
                        </div>
                    </div>

                    <div class="apEuro">
                        <label for="apEuro">AP EU History</label>
                        <div class="buttons">
                            <button onClick={() => {
                                setActiveEssayType('euroLEQ');
                                setActiveInstructions('euroLEQinst');
                            }}>LEQ</button>  
                            <button onClick={() => {
                                setActiveEssayType('euroSAQ');
                                setActiveInstructions('euroSAQinst');
                            }}>SAQ</button>
                        </div>
                    </div>

                    {/*ap lang box*/}
                    <div class="apLang">
                        <label for="apLang">AP English Lang</label>
                        <div class="buttons">
                            <button onClick={() => {
                                setActiveEssayType('argument');
                                setActiveInstructions('argumentInst');
                            }}>Argument Essay</button>
                        </div>
                    </div>
                </div>


                <div class="generateButton">
                    <button onClick={() => {getAIOutput();}}>
                        Generate Prompt
                    </button>
                </div>


                <div class="textSection">
                    <div class="text-section">
                        <p>{aiOutput}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Generate;
