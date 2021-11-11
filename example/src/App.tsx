import "./App.css";
import { ReactFlvPlayer } from "@asurraa/react-ts-flv-player";
function App() {
  const url = "https://monitoring.gamebetting.asurraa.dev/livegame/game.flv";
  return (
    <div className="App">
      <ReactFlvPlayer
        url={url}
        showControls={true}
        enableStashBuffer={true}
        isMuted={false}
        isLive={true}
      />{" "}
    </div>
  );
}

export default App;
