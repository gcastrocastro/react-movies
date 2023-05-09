import './App.css';
import {useState} from 'react';
import LoginPage from './Pages/LoginPage/LoginPage';
import { Routes, Route } from 'react-router-dom';

function App() {
  const [user, setUser] = useState(null);
  return (
    <div className="App">
    { user ?
      <>
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
