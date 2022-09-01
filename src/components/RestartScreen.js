const RestartScreen = ({goToStart, finalScore}) => {
    return (
        <>
        Your final score was {finalScore}<br />
        Want to restart the game?
        <button onClick={goToStart}>Restart game</button>
        </>
    )
}

export default RestartScreen