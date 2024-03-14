// frontend\src\pages\Generate\Generate.js
// This is the page where users can generate a prompt for AI to grade.


import './Generate.css';
import '../../Theme.css';


import React, { useState } from 'react';
import axios from 'axios';


function Generate() {


    //button effect when clicked
    document.addEventListener('DOMContentLoaded', function() {
        const buttons = document.querySelectorAll('.buttons button');
     
        buttons.forEach(button => {
          button.addEventListener('click', function() {
            // Remove 'active' class from all buttons
            buttons.forEach(btn => btn.classList.remove('active'));
            // Add 'active' class to the clicked button
            this.classList.add('active');
          });
        });
      });


      // method to feed prompt into openAI api in backend and print the response in the textSection
    const [aiOutput, setAiOutput] = useState('');
    // const getAIOutput = async () => {
    //     try {
    //         const response = await axios.post('http://localhost:5000/api/openai', { prompt: 'Pretend you are donald trump. give a short introduction.' });
    //         if (response && response.data && response.data.output) {
    //             setAiOutput(response.data.output);
    //         } else {
    //             console.error('Invalid response:', response);
    //         }
    //     } catch (error) {
    //         console.error(error);
    //     }
    // };


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
                        <label for="apWorld">AP World History</label>
                        <div class="buttons">
                            <button>LEQ</button>
                            <button>SAQ</button>
                        </div>
                    </div>
                    <div class="apUSH">
                        <label for="apUSH">AP US History</label>
                        <div class="buttons">
                            <button>LEQ</button>
                            <button>SAQ</button>
                        </div>
                    </div>
                    <div class="apLang">
                        <label for="apLang">AP English Lang</label>
                        <div class="buttons">
                            <button>Argument Essay</button>
                        </div>
                    </div>
                </div>


                <div class="generateButton">
                    <button onClick={() => {
                        const getAIOutput = async () => {
                            try {
                                const response = await axios.post('http://localhost:5000/api/openai', { prompt: 'Pretend you are donald trump. give a short introduction.' },
                                { headers: { 'Content-Type': 'application/json' } });
                                console.log('request sent!');
                                console.log(response);
                                if (response && response.data && response.data.output) {
                                    setAiOutput(response.data.output);
                                } else {
                                    console.error('Invalid response:', response);
                                }
                            } catch (error) {
                                console.error(error);
                            }
                        };
                        getAIOutput();
                    }}>Get my question!</button>
                </div>


                <div class="textSection">
                    <div class="text-section">
                        <p>output: {aiOutput}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Generate;
