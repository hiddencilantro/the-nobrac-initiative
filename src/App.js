import './App.css';
import { Routes, Route } from 'react-router-dom';
import NavBar from './components/NavBar';
import Landing from './components/Landing';
import Survey from './components/survey/Survey';

function App() {
  return (
    <div className="App">
      <NavBar />
      <br />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="survey/*" element={<Survey />} />
      </Routes>
    </div>
  );
}

export default App;
