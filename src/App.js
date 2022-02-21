import logo from './logo.svg';
import './App.css';

import Facebook from './components/Facebook';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Facebook Auth Example</p>
        <Facebook />
      </header>
    </div>
  );
}

export default App;
