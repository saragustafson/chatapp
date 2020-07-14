import React, {useState, useEffect} from 'react';
import './App.css';
import Footer from './footer'
import Message from './message'
import {initialize, useDatu} from 'datu'
import {BrowserRouter, Route} from 'react-router-dom'
import NamePicker from './namepicker'

function App(){
  useEffect(() =>{
    const path = window.location.pathname
    if(path.length<2) {
      window.location.pathname='/home'
    }
  }, [])

  return <BrowserRouter>
    <Route path="/:room" component={Room}/>
  </BrowserRouter>
}

function Room(props) {
  const room=props.match.params.room
  const [name, setName] = useState('')
  const{messages, send} = useDatu(room)
  console.log(messages)
  return (
    <main className="main">

    <header>
      <img src="https://1.bp.blogspot.com/-0e6pEwXW50I/Xvpahud34nI/AAAAAAABdyI/pYKA-hHnbIYvNOHbWpz2LYqmZw-3NUi2QCK4BGAsYHg/s320/chatapplogo.png" alt="logo" />
      <span>Let's Chat</span>
      <link rel="stylesheet"
          href="https://fonts.googleapis.com/css?family=Spartan"/>
      <NamePicker onSave={setName}/>
    </header>

    <div className="messages">
      {messages.map((m,i)=> <Message key={i} text={m.text} />)}
    </div>

    <Footer 
      onSend={(text)=> send({text, room})}
    />

    </main>
  );
}

export default App;


const firebaseConfig = {
  apiKey: "AIzaSyDzC-YzPje_34ElZKmYPvVKWnXq43VgkM0",
  authDomain: "chatwsara.firebaseapp.com",
  databaseURL: "https://chatwsara.firebaseio.com",
  projectId: "chatwsara",
  storageBucket: "chatwsara.appspot.com",
  messagingSenderId: "358074175677",
  appId: "1:358074175677:web:253a262b9c2538ea9927d4",
  measurementId: "G-8N04ZF8LPT"
};
initialize(firebaseConfig)

