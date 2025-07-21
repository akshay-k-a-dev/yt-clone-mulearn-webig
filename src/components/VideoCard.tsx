import { useState } from 'react';
import { MoreVertical, Clock } from 'lucide-react';
import { Button } from './ui/button';

interface VideoCardProps {
  title: string;
  channel: string;
  views: string;
  timestamp: string;
  duration: string;
  thumbnail: string;
  isRickroll?: boolean;
}

export function VideoCard({
  title,
  channel,
  views,
  timestamp,
  duration,
  thumbnail,
  isRickroll = false
}: VideoCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const handleClick = () => {
    if (isRickroll) {
      window.open('https://www.youtube.com/watch?v=dQw4w9WgXcQ', '_blank');
    }
  };

  return (
    <div 
      className="cursor-pointer group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleClick}
    >
      {/* Thumbnail */}
      <div className="relative aspect-video bg-youtube-sidebar-bg rounded-lg overflow-hidden mb-3">
        <img 
          src={thumbnail} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-2 right-2 bg-black bg-opacity-80 text-white text-xs px-1 py-0.5 rounded">
          {duration}
        </div>
        {isHovered && (
          <div className="absolute inset-0 bg-black bg-opacity-20 flex items-center justify-center">
            <div className="w-12 h-12 bg-black bg-opacity-60 rounded-full flex items-center justify-center">
              <svg className="w-6 h-6 text-white ml-1" viewBox="0 0 24 24" fill="currentColor">
                <path d="M8 5v14l11-7z"/>
              </svg>
            </div>
          </div>
        )}
      </div>

      {/* Video info */}
      <div className="flex space-x-3">
        <div className="flex-shrink-0">
          <div className="w-9 h-9 bg-youtube-sidebar-bg rounded-full flex items-center justify-center">
            <span className="text-youtube-text text-sm font-medium">
              {channel.charAt(0)}
            </span>
          </div>
        </div>
        <div className="flex-1 min-w-0">
          <h3 className="text-youtube-text text-sm font-medium line-clamp-2 mb-1">
            {title}
          </h3>
          <p className="text-youtube-text-secondary text-xs mb-1">{channel}</p>
          <div className="flex items-center text-youtube-text-secondary text-xs">
            <span>{views}</span>
            <span className="mx-1">•</span>
            <span>{timestamp}</span>
          </div>
        </div>
        <Button 
          variant="ghost" 
          size="icon" 
          className="flex-shrink-0 w-6 h-6 text-youtube-text-secondary hover:text-youtube-text hover:bg-youtube-hover opacity-0 group-hover:opacity-100"
        >
          <MoreVertical className="w-4 h-4" />
        </Button>
      </div>
    </div>
  );
}