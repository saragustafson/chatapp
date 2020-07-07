import React, {useState} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import {initialize, useDatu} from 'datu'

function App() {
  const{messages, send} = useDatu()
  console.log(messages)
  return (
    <main className="main">

    <header>
      <img src="https://1.bp.blogspot.com/-0e6pEwXW50I/Xvpahud34nI/AAAAAAABdyI/pYKA-hHnbIYvNOHbWpz2LYqmZw-3NUi2QCK4BGAsYHg/s320/chatapplogo.png" alt="logo" />
      <span>Let's Chat</span>
      <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spartan"/>
    </header>

    <div className="messages">
      {messages.map((m,i)=> <Message key={i} text={m.text} />)}
    </div>

    <Footer 
      onSend={(text)=> send({text:text})}
    />

    </main>
  );
}

export default App;


const firebaseConfig = {
  apiKey: "AIzaSyDWXVgUqm3xATyzqUqTxcpvsW7U804ctXI",
  authDomain: "chatter20202020.firebaseapp.com",
  databaseURL: "https://chatter20202020.firebaseio.com",
  projectId: "chatter20202020",
  storageBucket: "chatter20202020.appspot.com",
  messagingSenderId: "630230183323",
  appId: "1:630230183323:web:cc967f51fc79e394ca053e"
};
initialize(firebaseConfig)

