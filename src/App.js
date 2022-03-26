import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import Landing from './components/Landing';
import Issues from './components/Issues';
import Quiz from './components/Quiz';
import Footprints from './components/Footprints';
import NotFound from './components/NotFound';

function App() {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);

  return (
    <div className="App">
      <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
      <Login login={login} setLogin={setLogin} setSignup={setSignup} />
      <NavBar setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="issues" element={<Issues />} />
        <Route path="quiz/*" element={<Quiz setLogin={setLogin} setCreateSuccess={setCreateSuccess} />} />
        <Route path="footprints" element={<Footprints setLogin={setLogin} 
            createSuccess={createSuccess} setCreateSuccess={setCreateSuccess} />} >
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
