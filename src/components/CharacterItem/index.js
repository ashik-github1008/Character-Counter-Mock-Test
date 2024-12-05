import './index.css'

const CharacterItem = props => {
  const {charDetails} = props
  return (
    <li>
      <p>
        {charDetails.character} : {charDetails.character.length}
      </p>
    </li>
  )
}

export default CharacterItem
