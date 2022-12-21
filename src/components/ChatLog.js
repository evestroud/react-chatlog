import './ChatLog.css';
import PropTypes from 'prop-types';
import ChatEntry from './ChatEntry';

const ChatLog = (props) => {
  const chatEntries = props.entries.map(
    ({ id, sender, body, timeStamp, liked }, i) => {
      return (
        <ChatEntry
          key={i}
          id={id}
          sender={sender}
          body={body}
          timeStamp={timeStamp}
          liked={liked}
          toggleLike={props.toggleLike}
        />
      );
    }
  );

  return <div className=".chat-log">{chatEntries}</div>;
};

ChatLog.propTypes = {
  entries: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      sender: PropTypes.string,
      body: PropTypes.string,
      timeStamp: PropTypes.string,
      liked: PropTypes.bool,
    })
  ),
  toggleLike: PropTypes.func,
};

export default ChatLog;
