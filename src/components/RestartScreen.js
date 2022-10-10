const RestartScreen = ({goToStart, finalScore}) => {
    return (
        <>
        <div className="text-center">
        <h2 class="text-center mb-3">Final Results:</h2>
        <p class="mt-3 px-3 double-line-height">
            Your final score was <span class="bold">{finalScore}</span>
        </p>
        </div>
        <div className="rectangle-button-container">
                <button className='my-3 button-rectangle button-short' onClick={goToStart}>Restart game</button>
        </div>
        </>
    )
}

export default RestartScreen