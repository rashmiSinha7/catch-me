import { useState, useEffect } from "react";
import "./App.css";
import Button from "./Button";
import Timer from "./Timer";

function App() {
  const [message, setMessage] = useState();
  const [counter, setCounter] = useState(30);

  useEffect(() => {
    const button = document.getElementById("btn");
    if (!message && counter > 0) {
      button.addEventListener("mouseover", function () {
        button.style.left = `${Math.ceil(Math.random() * 90)}%`;
        button.style.top = `${Math.ceil(Math.random() * 90)}%`;
      });
    } else {
      button.style.left = `43%`;
      button.style.top = `40%`;
      button.style.pointerEvents = `none`;
      button.style.backgroundColor = `grey`;
    }
  }, [counter]);

  useEffect(() => {
    setTimeout(() => {
      if (counter > 0) {
        setCounter(counter - 1);
      }
    }, 1000);
  }, [counter]);

  const changeMessgaeHandle = () => {
    setMessage("You win!");
    console.log("click event");
  };

  return (
    <div className="App">
      <Timer message={message} counter={counter} />
      <Button changeMessgaeHandle={changeMessgaeHandle} />
    </div>
  );
}

export default App;
