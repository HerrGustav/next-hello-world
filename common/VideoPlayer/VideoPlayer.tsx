import React, { useRef } from "react";
import { Button, Text } from "../../components";
import { StyledVideoPlayerWrap } from "./styles";

type VideoPlayerProps = {
  id: string;
  src: string;
  // options: VideoJsPlayerOptions;
  // onReady: (p: VideoJsPlayer) => void;
};

const VideoPlayer: React.FC<VideoPlayerProps> = (
  props: VideoPlayerProps
): JSX.Element => {
  const player = useRef<HTMLVideoElement | null>(null);
  const jump = () => {
    if (!player.current) return;
    player.current.currentTime = 22;
  };
  return (
    <StyledVideoPlayerWrap>
      <div data-vjs-player>
        <video
          data-qa="video-player"
          ref={player}
          src={props.src}
          controls
          preload="auto"
        >
          Your browser does not support the video tag.
        </video>
      </div>
      <Text>If you want to cut short and don't watch the same video:</Text>
      <Button data-qa="video-player--jump-mark" onClick={jump}>
        Jump to best moment!
      </Button>
    </StyledVideoPlayerWrap>
  );
};

export { VideoPlayer };