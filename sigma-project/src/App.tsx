
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Survey from './pages/Survey';
import './styles/App.css';

export default function App() {



  
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/survey" element={<Survey />} />
    </Routes>
  );
}
