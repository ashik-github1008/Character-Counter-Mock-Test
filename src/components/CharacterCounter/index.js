import {Component} from 'react'
import {v4 as uuidv4} from 'uuid'
import './index.css'
import CharacterItem from '../CharacterItem/index'

class CharacterCounter extends Component {
  state = {charactersList: [], inputValue: ''}

  onChangeInput = event => {
    this.setState({inputValue: event.target.value})
  }

  onClickAddBtn = event => {
    event.preventDefault()

    const {inputValue} = this.state
    this.setState(prevState => ({
      charactersList: [
        ...prevState.charactersList,
        {
          id: uuidv4(),
          character: inputValue,
        },
      ],
      inputValue: '',
    }))
  }

  renderCharacterListContainer = () => {
    const {charactersList} = this.state
    return (
      <ul className="character-list-container">
        {charactersList.map(eachChar => (
          <CharacterItem key={eachChar.id} charDetails={eachChar} />
        ))}
      </ul>
    )
  }

  render() {
    const {charactersList, inputValue} = this.state
    return (
      <div className="app-container">
        <div className="character-count-display-container">
          <h1>Count the characters like a boss</h1>
          {charactersList.length > 0 ? (
            this.renderCharacterListContainer()
          ) : (
            <img
              src="https://assets.ccbp.in/frontend/react-js/no-user-inputs-img.png"
              alt="no user inputs"
              className="no-user-input-img"
            />
          )}
        </div>
        <div className="character-count-input-container">
          <h1>Character Counter</h1>
          <form className="input-container" onSubmit={this.onClickAddBtn}>
            <input
              type="input"
              placeholder="Enter the Characters here"
              onChange={this.onChangeInput}
              value={inputValue}
            />
            <button type="submit">Add</button>
          </form>
        </div>
      </div>
    )
  }
}

export default CharacterCounter
