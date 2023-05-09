import './App.css';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import NavBar from './Components/NavBar';
import MoviesListPage from './Pages/MoviesListPage/MoviesListPage';
import MovieDetailPage from './Pages/MovieDetailPage/MovieDetailPage';
import ActorsListPage from './Pages/ActorsListPage/ActorsListPage';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
    { user ?
      <>
        <NavBar/>
        <Routes>
          <Route path="/" element={MoviesListPage}/>
          <Route path="/movies/:movieName" element={MovieDetailPage}/>
          <Route path="/actors" element={ActorsListPage}/>
        </Routes>
      </>
      :
      <Routes>
        <Route path="/" element={<LoginPage user={user} setUser={setUser}/>} />
      </Routes>
    }
    </div>
  );
}

export default App;
