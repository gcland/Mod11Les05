import { useEffect, useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import './App.css'
import { ts, apikey, hash } from './keys.jsx' // input user apikey and hash into 'keys.jsx'
import axios from 'axios';
import CharactersList from './components/CharactersBrowse.jsx';
import Comics from './components/Comics.jsx';
import NavigationBar from './components/NavigationBar.jsx';
import Home from './components/Home.jsx';
import NotFound from './components/NotFound.jsx';
import CharacterDetailWrapper from './components/CharacterDetailWrapper.jsx'
import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchCharacters();
  }, []);

  const limit = 75 // SET LIMIT OF PAGE TO RENDER. NOTE: PAGE TAKES SIGNIFICANT TIME TO LOAD PAST LIMIT OF 100 CHARACTERS

  const fetchCharacters = async () => {
    try {
      const response = await axios.get(`https://gateway.marvel.com:443/v1/public/characters?orderBy=name&limit=${limit}&ts=${ts}&apikey=${apikey}&hash=${hash}`);
      setCharacters(response.data.data.results);
      console.log(response.data.data.results)
      setLoading(false);
    } catch (error) {
      console.error('Error fetching character data:', error);
    }
  }
 

  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/characters-browse' element={<CharactersList characters={characters} loading={loading} limit={limit} />} />
        <Route path='/character-detail/:id' element={<CharacterDetailWrapper />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='*' element={<NotFound />} />
      </Routes>
    </div>
  )

};

export default App