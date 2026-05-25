import VideoPlayer from './VideoPlayer';

interface Video {
  id: string;
  src: string;
  poster: string;
  title: string;
  description?: string;
}

interface VideoGalleryProps {
  videos: Video[];
  columns?: 1 | 2 | 3;
}

export default function VideoGallery({ videos, columns = 2 }: VideoGalleryProps) {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
  };

  return (
    <div className={`grid ${gridCols[columns]} gap-8`}>
      {videos.map((video) => (
        <div key={video.id} className="space-y-4">
          <VideoPlayer
            src={video.src}
            poster={video.poster}
            title={video.title}
            className="aspect-video"
          />
          {video.description && (
            <p className="text-gray-400 text-sm">{video.description}</p>
          )}
        </div>
      ))}
    </div>
  );
}
