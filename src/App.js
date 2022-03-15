import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Mission from './components/Mission';
import Survey from './components/Survey';
import NotFound from './components/NotFound';

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="survey/*" element={<Survey />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
