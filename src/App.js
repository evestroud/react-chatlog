import React, { useState } from 'react';
import './App.css';
import chatMessages from './data/messages.json';
import ChatLog from './components/ChatLog';

const App = () => {
  const messageCopy = chatMessages.map((message) => {
    return {
      id: message.id,
      sender: message.sender,
      body: message.body,
      timeStamp: message.timeStamp,
      liked: message.liked,
    };
  });

  let [messageData, setMessageData] = useState(messageCopy);

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
      </main>
    </div>
  );
};

export default App;
