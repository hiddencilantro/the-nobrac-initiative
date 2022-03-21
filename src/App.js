import './App.css';
import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Signup from './components/Signup';
import Login from './components/Login';
import Landing from './components/Landing';
import Mission from './components/Mission';
import Survey from './components/Survey';
import Footprints from './components/Footprints';
import EmissionData from './components/EmissionData';
import NotFound from './components/NotFound';

function App() {
  const [signup, setSignup] = useState(false);
  const [login, setLogin] = useState(false);
  const [createSuccess, setCreateSuccess] = useState(false);
  const [deleteSuccess, setDeleteSuccess] = useState(false);

  return (
    <div className="App">
      <Signup signup={signup} setSignup={setSignup} setLogin={setLogin} />
      <Login login={login} setLogin={setLogin} setSignup={setSignup} />
      <NavBar setLogin={setLogin} />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="mission" element={<Mission />} />
        <Route path="survey/*" element={<Survey setLogin={setLogin} setCreateSuccess={setCreateSuccess} />} />
        <Route path="footprints" element={<Footprints setLogin={setLogin} 
            createSuccess={createSuccess} setCreateSuccess={setCreateSuccess} 
            deleteSuccess={deleteSuccess} setDeleteSuccess={setDeleteSuccess} />} >
          <Route path=":emissionId" element={<EmissionData setDeleteSuccess={setDeleteSuccess} />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
