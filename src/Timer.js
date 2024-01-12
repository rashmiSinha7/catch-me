import "./App.css";

function Timer(props) {
  const { counter, message } = props;
  const displayMessage = () => {
    let displayMsg;
    if (message) {
      displayMsg = `Congratulations! You Won.`;
    } else if (counter > 0) {
      displayMsg = `Click the Button in ${counter} Seconds to Win!`;
    } else {
      displayMsg = `Time's up! You Lose.`;
    }
    return displayMsg;
  };
  return <div className="Timer">{displayMessage()}</div>;
}

export default Timer;
