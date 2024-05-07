import './index.css'

const GameOver = props => {
  const {score, restartGame} = props

  return (
    <div className="scorecard-container">
      <img
        src="https://assets.ccbp.in/frontend/react-js/match-game-trophy.png "
        alt="trophy"
        className="scorecard-trophy"
      />
      <p className="scorecard-text">Your Score</p>
      <p className="scorecard-score">{score}</p>
      <div className="scorecard-button-container">
        <button
          className="scorecard-button"
          onClick={restartGame}
          type="button"
        >
          <img
            src="https://assets.ccbp.in/frontend/react-js/match-game-play-again-img.png "
            alt="reset"
            className="scorecard-playagain"
          />
          PLAY AGAIN
        </button>
      </div>
    </div>
  )
}

export default GameOver
