import { Ref } from "preact";
import { useRef, useState, useEffect } from "preact/hooks";
import { throttle } from "lodash-es";
import Redo from "../components/svgs/Redo.tsx";

interface EmbeddedVideoProps {
  webm: string;
  mp4: string;
  width?: number;
  height?: number;
}

// Code modified from https://github.com/fkhadra/react-on-screen
const checkIsVisible = (
  {
    top,
    bottom,
    height,
  }: {
    top: number;
    bottom: number;
    height: number;
  },
  windowHeight: number
) => {
  if (top + bottom === 0) {
    return false;
  }

  const topThreshold = 0;
  const heightCheck = windowHeight;

  return height > heightCheck
    ? top + height >= topThreshold && bottom - height <= heightCheck
    : top >= topThreshold && bottom <= heightCheck;
};

const isVideoVisible = (
  nodeRef: HTMLElement | null,
  setIsVisible: (isVis: boolean) => void
) => {
  setTimeout(() => {
    // isComponentVisible might be called from componentDidMount, before component ref is assigned
    if (!nodeRef) return;

    const html = document.documentElement;
    const boundingClientRect = nodeRef.getBoundingClientRect();
    const windowHeight = window.innerHeight || html.clientHeight;

    const isVisible = checkIsVisible(boundingClientRect, windowHeight);
    setIsVisible(isVisible);
  }, 0);
};

const EmbeddedVideo = ({ webm, mp4, width, height }: EmbeddedVideoProps) => {
  const videoRef: Ref<HTMLVideoElement> = useRef(null);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(false);
  const [loading, setLoading] = useState(false);
  const [canPlay, setCanPlay] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const videoNode = videoRef.current;
    const throttledIsVideoVisible = throttle(
      () => isVideoVisible(videoNode, setIsVisible),
      250
    ) as () => void;
    self.addEventListener("scroll", throttledIsVideoVisible);
    self.addEventListener("resize", throttledIsVideoVisible);

    return () => {
      self.removeEventListener("scroll", throttledIsVideoVisible);
      self.removeEventListener("resize", throttledIsVideoVisible);
    };
  }, []);
  useEffect(() => {
    if (!videoRef.current) return;
    const videoElement = videoRef.current;
    videoElement.oncanplaythrough = (e) => {
      setCanPlay(true);
    };

    videoElement.onended = (e) => {
      setPlaying(false);
    };

    return () => {
      videoElement.oncanplaythrough = null;
      videoElement.onended = null;
    };
  }, [webm, setCanPlay, setPlaying]);
  useEffect(() => {
    if (isVisible && !loading && !canPlay && videoRef.current && !played) {
      videoRef.current.load();
      setLoading(true);
    }
    if (isVisible && canPlay && videoRef.current && !played) {
      videoRef.current.play();
      setPlaying(true);
      setPlayed(true);
    }
  }, [isVisible, loading, canPlay, played, setLoading, setPlaying, setPlayed]);

  // Note: in my brief experimentation, aspectRatio on the parent did a better job preventing layout shift than anything I could do on the video itself
  return (
    <div
      class="relative my-6 border-2 border-warmGray-200"
      style={{
        aspectRatio:
          width && height ? `${width + 4} / ${height + 4}` : undefined,
      }}
    >
      {!playing && played && (
        <Redo
          class="absolute inset-0 m-auto w-16 h-16 text-5xl bg-warmGray-100 p-2 rounded-lg text-warmGray-800 cursor-pointer"
        />
      )}
      <video
        ref={videoRef}
        playsInline
        muted
        onClick={() => {
          if (!playing && videoRef.current) {
            setPlaying(true);
            videoRef.current.play();
          }
        }}
        width={width}
        height={height}
      >
        <source type="video/webm" src={webm} />
        <source type="video/mp4" src={mp4} />
      </video>
    </div>
  );
};

export default EmbeddedVideo;
