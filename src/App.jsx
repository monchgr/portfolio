import { useState } from 'react';
import './App.css';
import './index.css';
import Waves from './Waves';
import Switch from './Switch';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Home from './components/Home';
import BlurText from "./components/BlurText";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
} from 'react-router-dom';


function App() {

  const handleAnimationComplete = () => {
    console.log('Animation completed!');
  };

  const [modoOscuro, setModoOscuro] = useState(false);

  const handleToggle = () => {
    setModoOscuro(!modoOscuro);
  };

  return (
    <div className={modoOscuro ? 'oscuro' : 'claro'}>
      <Router>
        <div className="todo">
          <Waves
            lineColor="#E4E4E7"
            backgroundColor="rgba(255, 255, 255, 0.2)"
            waveSpeedX={0.02}
            waveSpeedY={0.01}
            waveAmpX={40}
            waveAmpY={20}
            friction={0.9}
            tension={0.01}
            maxCursorMove={120}
            xGap={12}
            yGap={36}
          />

          <header>

            <div className="carta">
              <h1>Monserrat</h1>
              <Switch onToggle={() => setModoOscuro(prev => !prev)} />
            </div>

            <nav>
              <ul>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Projects">Projects</Link></li>
                <li><Link to="/Contact">Contact</Link></li>
              </ul>
            </nav>
          </header>

          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/About" element={<About />} />
              <Route path="/Projects" element={<Projects />} />
              <Route path="/Contact" element={<Contact />} />
            </Routes>
          </main>

        </div>
      </Router>
    </div>

  )
}

export default App
