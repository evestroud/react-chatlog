import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  let [messageData, setMessageData] = useState(chatMessages);

  const toggleLike = (id) => {
    let newMessageData = messageData.map((message) => {
      if (message.id === id) {
        message.liked = !message.liked;
        return message;
      } else {
        return message;
      }
    });

    setMessageData(newMessageData);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
      </header>
      <main>
        <ChatLog entries={messageData} toggleLike={toggleLike} />
        {/* Wave 01: Render one ChatEntry component
        Wave 02: Render ChatLog component */}
      </main>
    </div>
  );
};

export default App;
