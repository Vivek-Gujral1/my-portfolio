"use client"
import React, { useRef, useState } from 'react';
import ReactPlayer from 'react-player';

interface VideoPlayerProps {
  url: string;
}

const VideoPlayer: React.FC<VideoPlayerProps> = ({ url }) => {
  const [playing, setPlaying] = useState<boolean>(false);
  const playerRef = useRef<ReactPlayer>(null);

  const handlePlayPause = () => {
    setPlaying(prevPlaying => !prevPlaying);
  };

  return (
    <div>
      <ReactPlayer
        ref={playerRef}
        url={url}
        playing={playing}
        controls
        width="100%"
        height="auto"
      />
      <button onClick={handlePlayPause}>
        {playing ? 'Pause' : 'Play'}
      </button>
    </div>
  );
};

export default VideoPlayer;
