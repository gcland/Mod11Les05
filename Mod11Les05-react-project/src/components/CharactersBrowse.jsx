import CharacterDetail from './CharacterDetail.jsx';
import { Link, NavLink } from "react-router-dom";

const CharactersList = ({ characters, loading, limit }) => {
    
    if(loading) return <h1>Loading {limit} characters. Please wait...</h1>

    return (
        <div id="grid-container">
            <h2>Characters</h2>
            <h3>Click on the character image to view details</h3>
            <ul id="characterList">
                {characters.map(character => (
                    <div id="characterItem">
                    <li key={character.id}>
                        <div id="charName">
                            {character.name}
                        </div>
                    </li>
                        <Link to={`/character-detail/${character.id}`}><img src={(character.thumbnail.path)+"."+(character.thumbnail.extension)} alt={`${character.name} Img`} width="300px"height="300px"></img></Link>
                    </div>

                ))}
            </ul>
        </div>
    )
}
export default CharactersList