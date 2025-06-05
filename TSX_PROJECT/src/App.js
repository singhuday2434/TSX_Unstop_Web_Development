import logo from './logo.svg';
import './App.css';
import Wrapper from './components/Wrapper';
import { BrowserRouter as Router } from 'react-router-dom'
function App() {
  return (
    <div className="App">
       <Router>
          <Wrapper />
       </Router>
     
    </div>
  );
}

export default App;
