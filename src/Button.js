import "./App.css";

function Button(props) {
  const catchHandle = () => {
    const { changeMessgaeHandle } = props;
    changeMessgaeHandle && changeMessgaeHandle();
  };

  return (
    <button id="btn" onClick={catchHandle}>
      Catch Me, If you can!
    </button>
  );
}

export default Button;
