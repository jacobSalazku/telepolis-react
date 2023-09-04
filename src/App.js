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
