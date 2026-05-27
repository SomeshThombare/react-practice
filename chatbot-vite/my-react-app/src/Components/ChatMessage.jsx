import RobotImage from "../assets/robot.jpg"
import UserImage from "../assets/UserProfileImage.jpg"
import './Apps.css'
import dayjs from 'dayjs';


function ChatMessage({ message, sender }) {
  return (
    <div className={sender === "user"
      ? "user-message-div"
      : "robot-message-div"
    }>
      {sender === "robot" &&
        <img
          src={RobotImage}
          width="50" />}

      <div className="chat-message-div">
        {message,
        dayjs(time),format('HH:mm')}
      </div>

      {sender === "user" &&
        <img
          src={UserImage}
          width="50" className="UserProfile"/>}
    </div>
  )
}

export default ChatMessage;