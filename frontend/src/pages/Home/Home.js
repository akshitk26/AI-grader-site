import React, { useState, useEffect } from 'react';
import './Home.css';
import { Link } from 'react-router-dom';

function Home() {

    const words = ['FASTER', 'EASIER', 'BETTER', 'SMARTER', 'EFFICIENT'];
    const [index, setIndex] = useState(0);
    const [outgoingIndex, setOutgoingIndex] = useState(null);

    useEffect(() => {
        const interval = setInterval(() => {
            setOutgoingIndex(index);
            setIndex((prevIndex) => (prevIndex + 1) % words.length);
        }, 2000); // Change every 2 seconds

        return () => clearInterval(interval); // Clean up on unmount
    }, [index]);

    return (
        <div>
            <div class="title">

                <div className='top'>
                    <h1>
                        <div className="titleContainer">
                            STUDY 
                            {outgoingIndex !== null && <span key={outgoingIndex} className="animatedWordOut">{words[outgoingIndex]}</span>}
                            <span key={index} className="animatedWordIn">{words[index]}</span>
                        </div>
                    </h1>
                    {/* <h1>STUDY FASTER /EASIER/BETTER/SMARTER/EFFICIENT</h1> */}

                    <h5>harnessing the power of AI</h5>
                </div>

                <div className='bottom'>
                    Spend less time searching and more time improving
                </div> 
            </div> {/* end of title */}

            <div className='homeBody'>

                

                <div className='desc1'>

                <div className='desc1title'>
                    
                <img className='icon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAABZ0lEQVR4nO2Zv0oDQRCHP1s1rY2NqGVsfAGb2PoEgopZQdQHSGfIg1gKllraGHwGG/8g5BFErcyeLMyFZLlLgtUMzgfb7G4xv/vNzB1z4Dh/pQEsYpg94AkogCHQB7YxxCpwAUQRMb4+gS0McCpPv5iy7jAgIs4QkdYXBkQMgQ7wblFIKSKttuytTRFzi3IRJ9lZlZhU7E0U18R1zZ1czC7KCzvKXhUdufMDrKCIUNNiI3Ce3T2Wu+nsDAMiigoxba0i5n1PRKmZOCPlVDpR1AhS5YSL0II7oQV3QgvuhBbcCS0E/+xQQnAnlBDcCSUEd0IJwZ1Qwv6c0458UKBq2rEAvFqfdiR2JLgB0LXoRMmVBNhjEjNOJJaADwlwk0nMiEgcSpDp72lO10I6lTxIoEejHdiQNBtYEbE+1nIfRUw/a8Nv0ppVc1lT0N/ADdCS1qyel6wGUpodAMsY4x54FmdSmjnOf+cXsp7lGPCwcF8AAAAASUVORK5CYII="/>
    <p>What is it?</p>
</div>

                    <div className='desc1body'>
                        <div className='part1'>
                            <p>The perfect addition for you to complete your AP prep and secure the 5. </p>
                        </div>

                        <div className='part2'>
                            <p>ExetasAI is the first ever AI based tool that specifically targets a commonly dreaded (and feared) but not-so-commonly-addressed  part of AP tests: Free Response Questions.</p>
                        </div>

                    </div>
                </div> {/* end of desc1 */}

                <div className='image1'>
                    <img className = 'questionicon' src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGAAAABgCAYAAADimHc4AAAACXBIWXMAAAsTAAALEwEAmpwYAAADPklEQVR4nO2czYtPURjHP/IyRN6SFYooL/NHzMKGhZ3FyHIsFEtZeUnKApNY2dhZzGooLFBKUhKpEYmVBWUzMTLmzdHNmZqa8TuX33m793w/9SzPnOc8n3POvb975x4QQgghhBBCCCGEEOLv7AQuAyPAGGAKj+/Aa+AK0Bty4iwBBoGpDAZtMo1p4BqwLETx72YwQNOQeOhbwsUMBmUaFld9FX87MJnBgEwDt6M9PgRcyGAwpqFRXTO75nkGAzENjepOsWu+ZDAQ09D45kPAD0cnKygb44iukYDOSEBiJCAxRQnYDZwFHgGfgQn7POqt/fV5AthGXIoQsBm4BfyqefcxHFFE6wUctrdz/3oLOA4cITytFjAAzHR5L36KsLRWwH4PxZ+NfsLRSgHrgU+eim/sFraVMLRSwKDH4s/GDRoqYDyygLX/edF1RfVIfQv+aZ2AgRqDegccsLKq2As8q9HuOC0UsBy/DDn6+whsWKBdNRFeOdrewT+tE/DB0d+xDm37HW3f45/WCRhz9LexQ9t1jrbV3/ZN6wR0w5oa/8PjGwmYwz5HQV7SQAE/G7QCbjtyPRegTwmw7HI8upiyT1V9IwGWe45i3CQMEsCfH2Wui++mtgroIS2r7Y+zTjmeDNh/cAETmQu47sjvKbA4YP9Fr4A+x2vKauvZETiHYldAD/DGkdvRCHkkF+D9Y4SanHfkdR9YRHiKFNDryGs00D1/lgJSbEGPHTkdiphLcAGTma2APkc+LyJtPcWugGFHPgcj55NcQOwVMOrIp3pFGZPitqDckIDESEDbBbi+jF9K2ZjSBJjQA84tHwnojASgFRAVoy1I14C5aAtCW1BUTGlb0LSjg+owp5gYCUgrIDeKWwG5IQGJkYDEZCVgpT3HwZVUKfE1poBVNV6WlxYjPgTM1BCgmc+CtbkUYwVU72A185lXl2l7vE5wAU8yWOomw6jOkiaGAAXzavDA54sqXyeWlBBTduZ7fUsoATi/PR6xR/p72fN9CjgTIqHSqHtOm4qfkQDN/IQCVPyEAlT8hAJU/IQCVPyEAlT8wKj4idHMT4y2ncRoz89IwOnUyZSIip8YzfzEaNsRQggh8M9vJF/M95kJJ/QAAAAASUVORK5CYII="></img>
                    <img src='https://media.discordapp.net/attachments/1177474455635775528/1223840447965696051/image.png?ex=661b513c&is=6608dc3c&hm=f4e3b59fc2cdd116b7e2637aff33abcc4565f1da83b171ac41cd1a59d2d54120&=&format=webp&quality=lossless&width=1212&height=286'/>
                </div>

                <div className='desc2'>
                    <div className='desc2title'>
                        <p>How do I use this?</p>
                    </div>

                    <div className='desc2body'>
                        <div className='box1'>  
                            <p>Head over to the 'Prompt Generator' page and watch the video tutorial to get an FRQ prompt for one of the listed subjects.</p>
                        </div>

                        <button class="button"> <Link to="/generate"> Generate a Prompt </Link> 
                        </button>

                        <div className='box2'>  
                            <p>Practice by writing your own response to the prompt</p>
                        </div>

                        <button class="button"> <Link to="/Grade"> Grade my response </Link>
                        </button>

                        <div className='box3'>  
                            <p>When done, follow the instructions on the 'Grader' page to score your writing and get feedback!</p>
                        </div>
                    </div>
                </div> {/* end of desc2 */} 

                <div className='image2'>
                    <p>image goes here</p>
                </div> {/* end of image1 */}

            </div> {/* end of homeBody */}
        </div> 
    )
}

export default Home;