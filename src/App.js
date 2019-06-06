import React from 'react';
// import logo from './logo.svg';
import './App.css';
import Index from './header/header'
import LikeButton from './like/like'
import CommentApp from './comments/comment'
import Lifecircle from './lifecircle/lifecircle'

function App() {
  return (
    <div className="App">
      <Index />
      <div>props 配置</div>
      <LikeButton likedText='已赞' unlikedText='赞'/>
      <div>没有 props 配置</div>
      <LikeButton />
      <div>评论app</div>
      <CommentApp />
      <div>react 的生命周期</div>
      <Lifecircle />
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
