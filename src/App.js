import './App.scss';
import ComingSoon from './pages/Coming-soon';
import { BrowserRouter as  Router, Routes , Route } from'react-router-dom';
import SearchView from './pages/SearchView';
import Home from './pages/Home';
import Header from './Components/Header';
import { useState , useEffect } from 'react';


function App() {
  
  const [searchResults,setSearchtresults] = useState([]);
  const [searchText,setSearchText] = useState('');

  useEffect(()=> {
    if(searchText) {
      console.log(searchText,'is the search text')
      fetch(`https://api.themoviedb.org/3/search/movie?query=${searchText}&api_key=cb8b5baf6bfe0c3929a841b05a0f27e4`)
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
              <Route path="/coming-soon" element={<ComingSoon/>}/>
              <Route path="/search" element={<SearchView  keyword={searchText} searchResults={searchResults }/>}/>
            </Routes>
          </div>
      </div>
    </Router>  

  );
}

export default App;
