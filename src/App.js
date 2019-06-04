import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Index from './header/header'
import LikeButton from './like/like'

function App() {
  return (
    <div className="App">
      <Index />
      <LikeButton />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Hello React</p>
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
