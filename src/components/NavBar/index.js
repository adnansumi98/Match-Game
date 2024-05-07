import './index.css'

const NavBar = props => {
  const {score, timer} = props
  return (
    <div className="navbar-container">
      <nav className="navbar">
        <img
          className="page-logo"
          src="https://assets.ccbp.in/frontend/react-js/match-game-website-logo.png"
          alt="website logo"
        />
        <div className="score-and-timer-contianer">
          <p className="score-and-timer-text">
            Score <span className="score-and-timer">{score}</span>
          </p>
          <div className="score-and-timer-text">
            <img
              className="timer-image"
              src="https://assets.ccbp.in/frontend/react-js/match-game-timer-img.png "
              alt="timer"
            />
            <p className="score-and-timer">{timer} sec</p>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default NavBar
