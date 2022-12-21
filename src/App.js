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

  const countLikes = () => {
    return messageData
      .map((message) => (message.liked ? 1 : 0))
      .reduce((p, c) => p + c);
  };

  return (
    <div id="App">
      <header>
        <h1>Application title</h1>
        <h2>Total Likes: {countLikes()} ❤️s</h2>
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
