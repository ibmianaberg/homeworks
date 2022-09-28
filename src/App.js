import "./App.css";

function App() {
  const userName = "Panda";
  const textForTexty = "Everything is going to be good!";

  return (
    <div className="App">
      <Myheader name={userName} />
      <Message texty={textForTexty} />
      <header className="App-header">
        <div className = "block">
          Hello!<br />
          <button
            className="button"
            autoFocus
            onClick={() => alert("You got two termal clips!")}
          >
            Press on this button to became a programmer! 
          </button>
        </div>
      </header>
    </div>
  );
}

export default App;

const Myheader = (props) => {
  return (
    <div className ='panda'>
      <h1 className = 'panda_h1'>Hello, {props.name}</h1>
    </div>
  );
};

const Message = (texty) => {
  return (
    <div className="texty">
      <h2> You are the best! {texty.textForTexty} </h2>
    </div>
  );
};
