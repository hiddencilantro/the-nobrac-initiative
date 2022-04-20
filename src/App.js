import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import ScrollToTop from './components/ScrollToTop';
import Landing from './components/Landing';
import Problem from './components/Problem';
import Quiz from './components/Quiz';
import Footprints from './components/Footprints';
import NotFound from './components/NotFound';

function App() {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [newUser, setNewUser] = useState({
    first_name: "",
    last_name: "",
    email: "",
    password: ""
  });
  const [user, setUser] = useState({
    email: "",
    password: ""
  });
  const [createSuccess, setCreateSuccess] = useState(false);

  return (
    <div className="App">
      <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} newUser={newUser} setNewUser={setNewUser} />
      <Login login={login} setLogin={setLogin} setSignup={setSignup} user={user} setUser={setUser} />
      <NavBar setLogin={setLogin} setNewUser={setNewUser} setUser={setUser} />
      <div className='content-container'>
        <ScrollToTop>
          <Routes>
            <Route path="/" element={<Landing />} />
            <Route path="problem" element={<Problem />} />
            <Route path="quiz/*" element={<Quiz setLogin={setLogin} setCreateSuccess={setCreateSuccess} />} />
            <Route path="footprints" element={<Footprints setLogin={setLogin} 
                createSuccess={createSuccess} setCreateSuccess={setCreateSuccess} />} >
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </ScrollToTop>
      </div>
    </div>
  );
}

export default App;
