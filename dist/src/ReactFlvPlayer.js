import { jsx as _jsx } from "react/jsx-runtime";
import { Fragment, useEffect, useRef } from "react";
import flv from "flv.js";
export const ReactFlvPlayer = (props) => {
    const { height, width, isLive, hasAudio, hasVideo, showControls, enableStashBuffer, stashInitialSize, isMuted, url, } = props;
    const videoRef = useRef(null);
    useEffect(() => {
        const player = flv.createPlayer({
            type: "flv",
            isLive: isLive,
            hasAudio: hasAudio,
            hasVideo: hasVideo,
            url: url,
        }, {
            stashInitialSize: stashInitialSize,
            enableStashBuffer: enableStashBuffer,
        });
        player.attachMediaElement(videoRef.current);
        player.load();
        player.play();
        player.on("error", (err) => {
            console.error(err);
        });
    }, []);
    return (_jsx(Fragment, { children: _jsx("video", { controls: showControls, muted: isMuted, ref: videoRef, style: { height, width } }, void 0) }, void 0));
};
//# sourceMappingURL=ReactFlvPlayer.js.map