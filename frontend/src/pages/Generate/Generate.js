import React from 'react';
import './Generate.css';
import '../../Theme.css';

function Generate() {

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
                    <button>Get my question!</button>
                </div>

                <div class="textSection">
                    <div class="text-section">
                        <p>Your prompt will show up here</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Generate;