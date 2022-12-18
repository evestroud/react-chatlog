import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = ({ entries }) => {
  const chatEntries = entries.map(({ sender, body, timeStamp }) => {
    return <ChatEntry sender={sender} body={body} timeStamp={timeStamp} />;
  });

  return <div className=".chat-log">{chatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf({
    sender: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    timeStamp: PropTypes.string.isRequired,
  }),
};

export default ChatLog;
