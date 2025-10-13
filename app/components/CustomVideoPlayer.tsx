"use client";

import { useState, useRef, useEffect } from "react";
import { Play, Pause, Volume2, VolumeX, Maximize } from "lucide-react";

interface CustomVideoPlayerProps {
  src: string;
  className?: string;
  autoPlay?: boolean;
}

const CustomVideoPlayer = ({ src, className = "", autoPlay = false }: CustomVideoPlayerProps) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [isMuted, setIsMuted] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [showControls, setShowControls] = useState(false);
  const [volume, setVolume] = useState(1);
  const hideControlsTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      setIsPlaying(false);
    };

    video.addEventListener("timeupdate", handleTimeUpdate);
    video.addEventListener("loadedmetadata", handleLoadedMetadata);
    video.addEventListener("ended", handleEnded);

    // Auto play if enabled
    if (autoPlay) {
      video.play().catch((error) => {
        console.log("Autoplay failed:", error);
      });
    }

    return () => {
      video.removeEventListener("timeupdate", handleTimeUpdate);
      video.removeEventListener("loadedmetadata", handleLoadedMetadata);
      video.removeEventListener("ended", handleEnded);
    };
  }, [autoPlay]);

  const handlePlayPause = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isPlaying) {
      video.pause();
    } else {
      video.play();
    }
    setIsPlaying(!isPlaying);
  };

  const handleMuteToggle = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newVolume = parseFloat(e.target.value);
    video.volume = newVolume;
    setVolume(newVolume);
    
    if (newVolume === 0) {
      setIsMuted(true);
      video.muted = true;
    } else if (isMuted) {
      setIsMuted(false);
      video.muted = false;
    }
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const video = videoRef.current;
    if (!video) return;

    const newTime = parseFloat(e.target.value);
    video.currentTime = newTime;
    setCurrentTime(newTime);
  };

  const handleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    if (document.fullscreenElement) {
      document.exitFullscreen();
    } else {
      video.requestFullscreen();
    }
  };

  const handleMouseMove = () => {
    setShowControls(true);
    
    if (hideControlsTimeoutRef.current) {
      clearTimeout(hideControlsTimeoutRef.current);
    }
    
    hideControlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  const handleMouseLeave = () => {
    if (isPlaying) {
      setShowControls(false);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, "0")}`;
  };

  return (
    <div
      className={`relative group ${className}`}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
    >
      <video
        ref={videoRef}
        src={src}
        loop
        muted
        playsInline
        autoPlay={autoPlay}
        className="w-full h-full object-cover cursor-pointer"
        onClick={handlePlayPause}
      />

      {/* Custom Controls Overlay */}
      <div
        className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent p-4 md:p-6 transition-opacity duration-300 ${
          showControls || !isPlaying ? "opacity-100" : "opacity-0"
        }`}
      >
        {/* Progress Bar */}
        <div className="mb-4">
          <input
            type="range"
            min="0"
            max={duration || 0}
            value={currentTime}
            onChange={handleSeek}
            className="w-full h-1 md:h-2 bg-white/30 rounded-full appearance-none cursor-pointer 
                     [&::-webkit-slider-thumb]:appearance-none 
                     [&::-webkit-slider-thumb]:w-3 
                     [&::-webkit-slider-thumb]:h-3 
                     [&::-webkit-slider-thumb]:md:w-4 
                     [&::-webkit-slider-thumb]:md:h-4 
                     [&::-webkit-slider-thumb]:rounded-full 
                     [&::-webkit-slider-thumb]:bg-[#80978b] 
                     [&::-webkit-slider-thumb]:cursor-pointer
                     [&::-webkit-slider-thumb]:transition-all
                     [&::-webkit-slider-thumb]:hover:scale-110
                     [&::-moz-range-thumb]:w-3 
                     [&::-moz-range-thumb]:h-3 
                     [&::-moz-range-thumb]:md:w-4 
                     [&::-moz-range-thumb]:md:h-4 
                     [&::-moz-range-thumb]:rounded-full 
                     [&::-moz-range-thumb]:bg-[#80978b] 
                     [&::-moz-range-thumb]:border-0
                     [&::-moz-range-thumb]:cursor-pointer
                     [&::-moz-range-thumb]:transition-all
                     [&::-moz-range-thumb]:hover:scale-110"
            style={{
              background: `linear-gradient(to right, #80978b 0%, #80978b ${
                (currentTime / duration) * 100
              }%, rgba(255,255,255,0.3) ${
                (currentTime / duration) * 100
              }%, rgba(255,255,255,0.3) 100%)`,
            }}
          />
        </div>

        {/* Control Buttons */}
        <div className="flex items-center justify-between gap-2 md:gap-4">
          <div className="flex items-center gap-2 md:gap-4">
            {/* Play/Pause Button */}
            <button
              onClick={handlePlayPause}
              className="bg-[#80978b] hover:bg-[#6b8276] text-white p-2 md:p-3 rounded-full transition-all duration-300 hover:scale-110"
              aria-label={isPlaying ? "Pause" : "Play"}
            >
              {isPlaying ? (
                <Pause className="w-4 h-4 md:w-5 md:h-5" />
              ) : (
                <Play className="w-4 h-4 md:w-5 md:h-5 ml-0.5" />
              )}
            </button>

            {/* Volume Control */}
            <div className="flex items-center gap-2">
              <button
                onClick={handleMuteToggle}
                className="text-white hover:text-[#80978b] transition-colors duration-300"
                aria-label={isMuted ? "Unmute" : "Mute"}
              >
                {isMuted ? (
                  <VolumeX className="w-4 h-4 md:w-5 md:h-5" />
                ) : (
                  <Volume2 className="w-4 h-4 md:w-5 md:h-5" />
                )}
              </button>

              {/* Volume Slider - Hidden on mobile */}
              <input
                type="range"
                min="0"
                max="1"
                step="0.1"
                value={isMuted ? 0 : volume}
                onChange={handleVolumeChange}
                className="hidden md:block w-16 lg:w-24 h-1 bg-white/30 rounded-full appearance-none cursor-pointer 
                         [&::-webkit-slider-thumb]:appearance-none 
                         [&::-webkit-slider-thumb]:w-3 
                         [&::-webkit-slider-thumb]:h-3 
                         [&::-webkit-slider-thumb]:rounded-full 
                         [&::-webkit-slider-thumb]:bg-white 
                         [&::-webkit-slider-thumb]:cursor-pointer
                         [&::-webkit-slider-thumb]:transition-all
                         [&::-webkit-slider-thumb]:hover:scale-110
                         [&::-moz-range-thumb]:w-3 
                         [&::-moz-range-thumb]:h-3 
                         [&::-moz-range-thumb]:rounded-full 
                         [&::-moz-range-thumb]:bg-white 
                         [&::-moz-range-thumb]:border-0
                         [&::-moz-range-thumb]:cursor-pointer
                         [&::-moz-range-thumb]:transition-all
                         [&::-moz-range-thumb]:hover:scale-110"
                style={{
                  background: `linear-gradient(to right, white 0%, white ${
                    (isMuted ? 0 : volume) * 100
                  }%, rgba(255,255,255,0.3) ${
                    (isMuted ? 0 : volume) * 100
                  }%, rgba(255,255,255,0.3) 100%)`,
                }}
                aria-label="Volume"
              />
            </div>

            {/* Time Display */}
            <span className="text-white text-xs md:text-sm font-medium">
              {formatTime(currentTime)} / {formatTime(duration)}
            </span>
          </div>

          {/* Fullscreen Button */}
          <button
            onClick={handleFullscreen}
            className="text-white hover:text-[#80978b] transition-colors duration-300"
            aria-label="Fullscreen"
          >
            <Maximize className="w-4 h-4 md:w-5 md:h-5" />
          </button>
        </div>
      </div>

      {/* Play button overlay when paused */}
      {!isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/30">
          <button
            onClick={handlePlayPause}
            className="bg-[#80978b] hover:bg-[#6b8276] text-white p-6 md:p-8 rounded-full transition-all duration-300 hover:scale-110"
            aria-label="Play video"
          >
            <Play className="w-8 h-8 md:w-12 md:h-12 ml-1" />
          </button>
        </div>
      )}
    </div>
  );
};

export default CustomVideoPlayer;

