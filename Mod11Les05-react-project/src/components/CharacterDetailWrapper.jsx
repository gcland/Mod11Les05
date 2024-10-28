import { useParams, useNavigate } from "react-router-dom";
import CharacterDetail from "./CharacterDetail";

function CharacterDetailWrapper() {
    let params = useParams()
    let navigate = useNavigate()

    return <CharacterDetail params={params} navigate={navigate} />
}

export default CharacterDetailWrapper;