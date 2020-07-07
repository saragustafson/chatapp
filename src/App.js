import React, {useState} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'

function App() {
  const[messages,setMessages] = useState([])
  return (
    <main className="main">

    <header>
      <img src="https://1.bp.blogspot.com/-0e6pEwXW50I/Xvpahud34nI/AAAAAAABdyI/pYKA-hHnbIYvNOHbWpz2LYqmZw-3NUi2QCK4BGAsYHg/s320/chatapplogo.png" alt="logo" />
      <span>Let's Chat</span>
      <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spartan"/>
    </header>

    {messages.map((m,i)=> <Message key={i} text={m} />)}

    <Footer 
      onSend={(text)=> setMessages([...messages, text])}
    />

    </main>
  );
}

export default App;
