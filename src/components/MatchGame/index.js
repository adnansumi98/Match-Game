import {Component} from 'react'

import TabList from '../TabList'
import Imagegenerator from '../Imagegenerator'
import NavBar from '../NavBar'
import GameOver from '../GameOver'

import './index.css'

class MatchGame extends Component {
  state = {
    selectedItem: '',
    correctId: '',
    selectedId: '',
    timer: 60,
    score: 0,
    highScore: 0,
    filteredImageList: [],
    isGameStarted: true,
  }

  componentDidMount() {
    this.randomNumberGenerator()
    this.startTimer()
    this.setFruits()
  }

  componentWillUnmount() {
    clearInterval(this.uniqueTimerId)
  }

  randomNumberGenerator = () => {
    const {imagesList} = this.props
    console.log(imagesList)
    const limit = imagesList.length
    const randomNumber = Math.ceil(Math.random() * limit)
    const randominList = randomNumber - 1 // index start from 0
    // console.log(imagesList[randominList].imageUrl)
    this.setState({
      selectedItem: imagesList[randominList],
      correctId: imagesList[randominList].id,
    })
  }

  startTimer = () => {
    this.uniqueTimerId = setInterval(() => {
      let objectState
      this.setState(prevState => {
        if (prevState.timer > 0) {
          objectState = {timer: prevState.timer - 1}
        } else {
          clearInterval(this.uniqueTimerId)
          objectState = {timer: 0, isGameStarted: false}
        }
        return objectState
      })
    }, 1000)
  }

  setFruits = () => {
    const {imagesList} = this.props
    document.getElementsByTagName('button')[0].classList.add('selected-tab')
    this.setState({
      filteredImageList: imagesList.filter(
        each =>
          each.category === document.getElementsByTagName('button')[0].value,
      ),
    })
  }

  restartGame = () => {
    // console.log('Restarting game') // Debug log
    this.startTimer()
    this.setFruits()
    this.setState({
      score: 0,
      timer: 60,
      filteredImageList: [],
      isGameStarted: true,
      selectedId: '',
    })
  }

  render() {
    const {tabsList, imagesList} = this.props
    // const initialImage = imagesList.length > 0 ? imagesList[0].imageUrl : ''
    const {
      selectedItem,
      filteredImageList,
      score,
      timer,
      isGameStarted,
    } = this.state

    const handleClickTab = event => {
      const selectedButton = event.target

      const buttons = [...document.getElementsByClassName('tab-button')]
      // console.log(buttons)
      buttons.forEach(button => {
        if (button === selectedButton) {
          button.classList.add('selected-tab')
          const filtered = imagesList.filter(
            each => each.category === selectedButton.value,
          )
          this.setState({filteredImageList: filtered})
        } else {
          button.classList.remove('selected-tab')
        }
      })
    }

    const handleClickImage = async event => {
      await this.setState(() => ({selectedId: event.target.value}))

      // console.log(this.state)
      const {selectedId, correctId, highScore} = this.state
      if (selectedId === correctId) {
        await this.setState(prevState => ({score: prevState.score + 1}))
        this.randomNumberGenerator()
      } else {
        await this.setState({isGameStarted: false})
      }

      if (score > highScore) {
        this.setState({highScore: score})
      }
    }

    return (
      <div className="main-container">
        <NavBar score={score} timer={timer} />
        {isGameStarted ? (
          <div>
            {/* 
            Page should initially consist of an HTML image element with alt 
            attribute value as "match" and src as the value of the key "imageUrl" 
            from the first object in imagesList provided test case failed            
            {initialImage && (
              <img src={initialImage} alt="match" className="initial-image" />
            )} */}
            <Imagegenerator selectedItem={selectedItem} />
            <TabList tabsList={tabsList} handleClickTab={handleClickTab} />
            <ul className="imagelist-container">
              {filteredImageList.map(each => (
                <li key={each.id} onClick={handleClickImage}>
                  <button
                    type="button"
                    className="image-button"
                    aria-label="Select Image"
                    value={each.id}
                    style={{backgroundImage: `url('${each.thumbnailUrl}')`}}
                  />
                </li>
              ))}
            </ul>
          </div>
        ) : (
          <GameOver score={score} restartGame={this.restartGame} />
        )}
      </div>
    )
  }
}

export default MatchGame
