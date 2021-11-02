import './App.css';
import Nav from './components/navigation/Nav';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import UseState from './hooks/UseState';
import UseEffect from './hooks/UseEffect';
import UseRef from './hooks/UseRef';
import UseMemo from './hooks/UseMemo';
import Parent from './components/props/Parent';
function App() {
  return (
    <div className="App">
      
      <Router>
      <Nav/>
        <Switch>
          <Route exact path="/" component={UseState}/>
          <Route exact path="/effect" component={UseEffect}/>
          <Route exact path="/ref" component={UseRef}/>
          <Route exact path="/memo" component={UseMemo}/>
          <Route exact path="/props" component={Parent}/>
        </Switch>
      </Router>      
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
