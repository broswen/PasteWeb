import { BrowserRouter, Link, Route } from 'react-router-dom';
import './App.css';
import GetPaste from './GetPaste';
import SubmitPaste from './SubmitPaste';

function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <div className="Navbar">
          <Link to="/" style={{ textDecoration: 'none', color: 'var(--black)' }}>
            <div className="Logo"><strong>Paste</strong></div>
          </Link>
        </div>
        <div className="Wrapper">
          <Route exact path="/">
            <SubmitPaste />
          </Route>
          <Route exact path="/:id">
            <GetPaste />
          </Route>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
