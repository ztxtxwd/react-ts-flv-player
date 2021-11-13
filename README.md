
![npm package](https://img.shields.io/npm/v/@asurraa/react-ts-flv-player.svg?style=flat-square?style=flat-square)

# React TS FLV Player

A React component to play flv streaming video also support typescript.

```sh
yarn add @asurraa/react-ts-flv-player

```
## Usage 
```tsx
import { Fragment } from "react";
import { ReactFlvPlayer } from "@asurraa/react-ts-flv-player";
const LiveDashboardPage = () => {
  const url = "https://monitoring.gamebetting.asurraa.dev/live123/123.flv";
  return (
    <Fragment>
      <ReactFlvPlayer
        url={url}
        isMuted={false}
        isLive={true}
        showControls={true}
        enableStashBuffer={true}
      />
    </Fragment>
  );
};

export default LiveDashboardPage;

```

## License

MIT
