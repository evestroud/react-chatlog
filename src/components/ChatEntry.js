import './ChatEntry.css';
import TimeStamp from './TimeStamp';
import PropTypes from 'prop-types';

const ChatEntry = (props) => {
  const handleLike = () => {
    props.toggleLike(props.id);
  };

  const senderClass = props.sender === 'Vladimir' ? 'local' : 'remote';

  return (
    <div className={'chat-entry ' + senderClass}>
      <h2 className="entry-name">{props.sender}</h2>
      <section className="entry-bubble">
        <p>{props.body}</p>
        <p className="entry-time">
          <TimeStamp time={props.timeStamp} />
        </p>
        <button className="like" onClick={handleLike}>
          {props.liked ? '❤️' : '🤍'}
        </button>
      </section>
    </div>
  );
};

ChatEntry.propTypes = {
  id: PropTypes.number,
  sender: PropTypes.string,
  body: PropTypes.string,
  timeStamp: PropTypes.string,
  liked: PropTypes.bool,
  toggleLike: PropTypes.func,
};

export default ChatEntry;
