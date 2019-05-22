import React from 'react';
import Counter from './Counter';
import Table from './Table'
import logo from './resources/logo.svg';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import Route from 'react-router-dom/Route';
import './style/App.css';


class App extends React.Component {

  onButtonClick = () => {
    this.setState({ appState: "counter" });
    console.log("Did you click the button")
  };

  render() {
    return (
      <Router>
        <div>
          <h1 className="App-header">
            <img src={logo} className="App-logo" alt="logo" />

            <noscript>usage of PROPS</noscript>

            <p>Welcome {this.props.input}!</p>
            <br></br>
            <p>This is the list of apps you made...</p>
            <Link to="/counter">Counter app</Link>
            <Link to="/table">Table app</Link>
          </h1>
        </div>
        <div>
          <Route path="/counter" exact strict render={
            () => {
              return (<Counter />);
            }
          } />
          <Route path="/table" exact strict render={
            () => {
              return (<Table />);
            }
          } />
        </div>
      </Router>
    )
  }
}

export default App;


/*
// samples for future

{ <Prompt
  when={!this.state.loggedIn}
  message={(location) => {
    return location.pathname.startsWith('/user') ? 'Are you sure?' : true
  }}
/>

function App() {
  return (
    <div>
      <h1 className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Edit src/App.js and save to reload.</p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">Learn React</a>
      </h1>
    </div>
  );
}
}
*/



