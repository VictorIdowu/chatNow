import { UserAuth } from "../context/AuthContext";

const Message = ({ message }) => {
  const { currentUser } = UserAuth();

  return (
    <div>
      <div
        className={`chat gap-x-5 justify-center ${
          message.uid === currentUser.uid ? "chat-end" : "chat-start"
        }`}
      >
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img src={message.avatar} />
          </div>
        </div>
        <aside
          className={`flex flex-col gap-1 w-full ${
            message.uid !== currentUser.uid ? "items-start" : "items-end"
          }`}
        >
          {message.uid === currentUser.uid ? (
            <p className="chat-header">me</p>
          ) : (
            <p className="chat-header">{message.name}</p>
          )}
          <p className="chat-bubble">{message.text}</p>
        </aside>
      </div>
    </div>
  );
};

export default Message;
