import { Search, Mic, Video, Bell, User } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';

export function YouTubeHeader() {
  return (
    <header className="bg-youtube-header-bg border-b border-youtube-border px-4 py-2 flex items-center justify-between sticky top-0 z-50">
      {/* Left section */}
      <div className="flex items-center space-x-4">
        <Button variant="ghost" size="icon" className="text-youtube-text hover:bg-youtube-hover">
          <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none">
            <path d="M3 6h18M3 12h18M3 18h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </Button>
        <div className="flex items-center space-x-1">
          <svg className="w-8 h-8 text-youtube-red" viewBox="0 0 24 24" fill="currentColor">
            <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
          </svg>
          <span className="text-youtube-text text-xl font-semibold">YouTube</span>
          <span className="text-youtube-text-secondary text-xs">IN</span>
        </div>
      </div>

      {/* Center section */}
      <div className="flex-1 max-w-2xl mx-4">
        <div className="flex">
          <div className="flex-1 relative">
            <Input 
              placeholder="Search" 
              className="bg-youtube-dark-bg border-youtube-border text-youtube-text placeholder:text-youtube-text-secondary rounded-l-full rounded-r-none border-r-0 h-10 px-4"
            />
          </div>
          <Button className="bg-youtube-sidebar-bg hover:bg-youtube-hover border border-youtube-border border-l-0 rounded-l-none rounded-r-full px-6 h-10">
            <Search className="w-5 h-5 text-youtube-text" />
          </Button>
          <Button variant="ghost" size="icon" className="ml-2 text-youtube-text hover:bg-youtube-hover rounded-full w-10 h-10">
            <Mic className="w-5 h-5" />
          </Button>
        </div>
      </div>

      {/* Right section */}
      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="text-youtube-text hover:bg-youtube-hover">
          <Video className="w-5 h-5" />
        </Button>
        <Button variant="ghost" size="icon" className="text-youtube-text hover:bg-youtube-hover relative">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1 right-1 w-2 h-2 bg-youtube-red rounded-full"></span>
        </Button>
        <Button variant="ghost" size="icon" className="text-youtube-text hover:bg-youtube-hover">
          <User className="w-5 h-5" />
        </Button>
      </div>
    </header>
  );
}