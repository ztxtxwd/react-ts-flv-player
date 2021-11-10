import { FC, Fragment, useEffect, useRef } from "react";
import flv from "flv.js";

export interface ReactFlvPlayerProps {
  isLive?: boolean;
  hasAudio?: boolean;
  hasVideo?: boolean;
  showControls?: boolean;
  enableStashBuffer?: boolean;
  stashInitialSize?: number | undefined;
  height?: number;
  width?: number;
  isMuted?: false;
  url: string;
}

export const ReactFlvPlayer: FC<ReactFlvPlayerProps> = (props) => {
  const {
    height,
    width,
    isLive,
    hasAudio,
    hasVideo,
    showControls,
    enableStashBuffer,
    stashInitialSize,
    isMuted,
    url,
  } = props;

  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const player = flv.createPlayer(
      {
        type: "flv",
        isLive: isLive,
        hasAudio: hasAudio,
        hasVideo: hasVideo,
        url: url,
      },
      {
        stashInitialSize: stashInitialSize,
        enableStashBuffer: enableStashBuffer,
      }
    );

    player.attachMediaElement(videoRef.current!);
    player.load();
    player.play();
    player.on("error", (err) => {
      console.error(err);
    });
  }, []);

  return (
    <Fragment>
      <video
        controls={showControls}
        muted={isMuted}
        ref={videoRef}
        style={{ height, width }}
      />
    </Fragment>
  );
};
