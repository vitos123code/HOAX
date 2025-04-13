import { useNavigate } from 'react-router-dom';
import '../styles/App.css';

export default function Home() {
  const navigate = useNavigate();

  const handleStart = () => {
    navigate('/survey');
  };

  return (
    <main>
      <div className="container">
        <h1>How’s life treating you?</h1>
        <p>Let me help you...</p>
        <button onClick={handleStart}>Start</button>
      </div>
    </main>
  );
}
