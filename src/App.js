import './App.scss';
import Movies from './pages/Movies';
import { BrowserRouter as  Router, Routes , Route } from'react-router-dom';
import SearchView from './pages/SearchView';
import Home from './pages/Home';
import Header from './Components/Header';
import { useState , useEffect } from 'react';
import ComingSoon from './pages/Coming-soon';

const API_key = process.env.TMDB_APP_API_KEY;
function App() {
  
  const [searchResults,setSearchtresults] = useState([]);
  const [searchText,setSearchText] = useState('');
 

  useEffect(()=> {
    if(searchText) {
      console.log(searchText,'is the search text')
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=${API_key}`)
      .then(response =>response.json())
      .then( data => {

        console.log(data);
        setSearchtresults(data.results)
     })
   

    }  
  },[searchText])

  
 


  return (

    <Router>
      <div className="container">
        <Header searchText ={searchText} setSearchText={setSearchText}/>
          <div>
            <Routes>
              <Route path="/"  element={<Home/>}/> 
              <Route path="/in-theaters" element={<ComingSoon  API_key={API_key} />}/>
              <Route path="/search" element={<SearchView  keyword={searchText} searchResults={searchResults }/>}/>
              <Route path="/movies" element={<Movies API_key={API_key}  />}/>
            </Routes>
          </div>
      </div>
    </Router>  

  );
}

export default App;
