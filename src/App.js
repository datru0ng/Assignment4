import './App.css';
import TextInput from './TextInput.js';
import {useState} from "react";
import Message from './Message';

//Everything on the interest is arrays of objects!!

function App() {
  const [messages, setMessages] = useState([]); //The variable messages is the current state, and setMessages is the function that keeps track of what is going in?
  function sendMessage(text){
    const newMessage = {
      text, 
      time: Date.now(), 
      user: "Danny",
    };
    setMessages([newMessage, ...messages]); //In the function setMessages, all the newMessage will come before all the previous messages
  }
  return (
    <div className="App">
      <header className="header">
        <div className="logo"/>
        <span className="title">LetsChat!</span>
      </header>
      <div className="messages">
        {messages.map((msg)=>{
          return <Message {...msg} />; {/*need clarification*/}
        })}
        </div>
        {/* everything we type will go through the function sendMessage that will add the words we type in to the array messages */}
      <TextInput sendMessage={sendMessage}/>
    </div>
  );
}

export default App;
