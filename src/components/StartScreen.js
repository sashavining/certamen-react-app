import React from 'react';

const StartScreen = ({handleClick}) => {

    return (
        <>
        <div>
        <h2 class="text-center mb-3">Certator:</h2>
        <p class="mt-3 px-3 double-line-height">
            Welcome to <span class="bold">Certator</span>, an open-source application for practicing certamen - the Quiz-Bowl-style game for Latin students. This app follows <a href="https://www.njcl.org/certamen">ACL's rules for the game</a>. It currently supports time-trial and non-time-trial modes, as well as modes with and without follow-up questions. I have drawn questions from the Harvard, Yale, and Princeton certamens, as well as the question sets available with the <a href="https://docs.google.com/document/d/1wn2cPrTzuoozvtrpA99QcJODzdpvb6I9EyMXGH5JnfI/edit">Certamen Starter Kit</a>.
        </p>
        <p class="px-3 double-line-height mb-3">
            Please visit our Notion site (coming soon!) if you are interested in the rationale behind the site and how to get involved. You can visit the <a href="https://github.com/sashavining/certamen-react-app">frontend</a> or <a href="https://github.com/sashavining/certamen-quizzer-graphql-server">backend</a> Github repositories if you are interested in the source code.
        </p>
        </div>
        <div className="rectangle-button-container">
                <button className='my-3 button-rectangle button-short' onClick={handleClick}>Start game!</button>
        </div>
        </>
    )
}

export default StartScreen