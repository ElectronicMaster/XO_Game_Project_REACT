import logo from './logo.svg';
import './App.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faSquareInstagram } from '@fortawesome/free-brands-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';
import GameBoard from './Functions/GameBoard';

function App() {
  return (
    <div className="App">
      <header>
        <h1>TIC TAC TOE</h1>
        <div>
          <a href="#">INSTRUCTIONS</a>
          <a href="#">RESET</a>
          <a href="#">LOGIN/SIGN UP</a>
        </div>
      </header>
      <main>
        <GameBoard/>
      </main>
      <footer>
        <div className='Contact-Details'>
            <label>Contact me via:</label>
            <div>
              <a href='#'><FontAwesomeIcon icon={faSquareInstagram} /></a> 
              <a href='#'><FontAwesomeIcon icon={faGithub} /></a> 
              <a href='#'><FontAwesomeIcon icon={faLinkedin} /></a> 
              <a href='#'><FontAwesomeIcon icon={faEnvelope} /></a> 
            </div>
        </div>
        <div className='Name'>
          <label><span>Done By:</span> Saianuush</label>
        </div>
      </footer>
    </div>
  );
}

export default App;
