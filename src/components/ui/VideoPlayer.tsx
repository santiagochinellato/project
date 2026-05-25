import { Play } from 'lucide-react';
import { useState } from 'react';

interface VideoPlayerProps {
  src: string;
  poster?: string;
  title?: string;
  className?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
}

export default function VideoPlayer({
  src,
  poster,
  title,
  className = '',
  autoPlay = false,
  loop = false,
  muted = true,
  controls = true,
}: VideoPlayerProps) {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [showPlayButton, setShowPlayButton] = useState(!autoPlay);

  const handlePlay = () => {
    setIsPlaying(true);
    setShowPlayButton(false);
  };

  return (
    <div className={`relative rounded-xl overflow-hidden ${className}`}>
      <video
        src={src}
        poster={poster}
        className="w-full h-full object-cover"
        autoPlay={autoPlay}
        loop={loop}
        muted={muted}
        controls={controls}
        playsInline
        onPlay={handlePlay}
        onClick={(e) => {
          const video = e.currentTarget;
          if (video.paused) {
            video.play();
            setIsPlaying(true);
            setShowPlayButton(false);
          } else {
            video.pause();
            setIsPlaying(false);
            setShowPlayButton(true);
          }
        }}
      >
        <source src={src} type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {showPlayButton && !isPlaying && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/40 backdrop-blur-sm cursor-pointer">
          <div className="bg-purple-600 hover:bg-purple-700 rounded-full p-6 transform hover:scale-110 transition-all">
            <Play size={48} className="text-white ml-1" fill="white" />
          </div>
          {title && (
            <div className="absolute bottom-8 left-8 right-8">
              <h3 className="text-white text-2xl font-bold drop-shadow-lg">{title}</h3>
            </div>
          )}
        </div>
      )}

      <div className="absolute top-4 left-4 bg-black/60 backdrop-blur px-3 py-1 rounded-full">
        <span className="text-white text-xs font-bold">+18</span>
      </div>
    </div>
  );
}
