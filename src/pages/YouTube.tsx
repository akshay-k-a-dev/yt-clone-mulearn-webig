import { useState } from 'react';
import { YouTubeHeader } from '../components/YouTubeHeader';
import { YouTubeSidebar } from '../components/YouTubeSidebar';
import { CategoryTabs } from '../components/CategoryTabs';
import { VideoCard } from '../components/VideoCard';
import rickrollThumbnail from '../assets/rickroll-thumbnail.jpg';

// Mock video data
const videos = [
  {
    title: "Rick Astley - Never Gonna Give You Up (Official Music Video)",
    channel: "Rick Astley",
    views: "1.4B views",
    timestamp: "13 years ago",
    duration: "3:32",
    thumbnail: rickrollThumbnail,
    isRickroll: true
  },
  {
    title: "MUST SIGN NOW!! 🤯🔥 30TH ANNIVERSARY LEGEND PACK REVIEW",
    channel: "EF WORLD",
    views: "9.4K views",
    timestamp: "3 hours ago",
    duration: "6:41",
    thumbnail: "https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=640&h=360&fit=crop&crop=center"
  },
  {
    title: "The Top 30 STRONGEST Characters in Bleach (Aizen, Ichigo, Yhwach)",
    channel: "Domain Aniki",
    views: "160K views",
    timestamp: "8 months ago",
    duration: "29:20",
    thumbnail: "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=640&h=360&fit=crop&crop=center"
  },
  {
    title: "Break down functional & non-functional requirements for MAANG Companies",
    channel: "SCALER",
    views: "12K views",
    timestamp: "2 days ago",
    duration: "15:43",
    thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=640&h=360&fit=crop&crop=center"
  },
  {
    title: "Amazing Football Skills & Goals 2024",
    channel: "Football Highlights",
    views: "2.3M views",
    timestamp: "1 week ago",
    duration: "10:15",
    thumbnail: "https://images.unsplash.com/photo-1431324155629-1a6deb1dec8d?w=640&h=360&fit=crop&crop=center"
  },
  {
    title: "AI Revolution: What's Coming Next in 2024",
    channel: "Tech Insider",
    views: "850K views",
    timestamp: "3 days ago",
    duration: "12:34",
    thumbnail: "https://images.unsplash.com/photo-1677442136019-21780ecad995?w=640&h=360&fit=crop&crop=center"
  },
  {
    title: "Epic Gaming Montage - Best Moments 2024",
    channel: "Gaming Pro",
    views: "456K views",
    timestamp: "5 days ago",
    duration: "8:22",
    thumbnail: "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=640&h=360&fit=crop&crop=center"
  },
  {
    title: "Relaxing Music for Study & Work - 2 Hour Mix",
    channel: "Study Beats",
    views: "1.2M views",
    timestamp: "2 weeks ago",
    duration: "2:00:00",
    thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=640&h=360&fit=crop&crop=center"
  }
];

export default function YouTube() {
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-youtube-dark-bg">
      <YouTubeHeader />
      
      <div className="flex">
        <YouTubeSidebar collapsed={sidebarCollapsed} />
        
        <main className="flex-1">
          <CategoryTabs />
          
          <div className="p-6">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {videos.map((video, index) => (
                <VideoCard
                  key={index}
                  title={video.title}
                  channel={video.channel}
                  views={video.views}
                  timestamp={video.timestamp}
                  duration={video.duration}
                  thumbnail={video.thumbnail}
                  isRickroll={video.isRickroll}
                />
              ))}
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}