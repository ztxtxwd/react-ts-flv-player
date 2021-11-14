
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
  const url = "https://xxx.flv";
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

## Use with NextJS with SSR disable 
```tsx
// create wrapper components 
import dynamic from "next/dynamic";
export const FlvNextPlayer = dynamic(
  () => import("@asurraa/react-ts-flv-player/dist/NextReactFlvPlayer"),
  {
    ssr: false,
  }
);

```

## License

MIT
