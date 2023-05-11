import './App.css';
import {useState} from 'react';
import { Routes, Route } from 'react-router-dom';
import LoginPage from './Pages/LoginPage/LoginPage';
import NavBar from './Components/NavBar/NavBar';
import MoviesListPage from './Pages/MoviesListPage/MoviesListPage';
import MovieDetailPage from './Pages/MovieDetailPage/MovieDetailPage';
// import ActorsListPage from './Pages/ActorsListPage/ActorsListPage';
import { movies } from "./data";

function App() {
  const [user, setUser] = useState(undefined);
  return (
    <main className="App">
    { user ?
      <>
        <NavBar user={user}/>
        <Routes>
          <Route path="/" element={ <MoviesListPage movies={movies}/>}/>
          <Route path="/movies/:movieName" element={ <MovieDetailPage movies={movies}/> }/>
          {/* <Route path="/actors" element={ <ActorsListPage/> }/> */}
        </Routes>
      </>
      :
      <Routes>
        <Route path="/" element={<LoginPage user={user} setUser={setUser}/>} />
      </Routes>
    }
    </main>
  );
}

export default App;
