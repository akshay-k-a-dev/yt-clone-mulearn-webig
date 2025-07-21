import { Home, Compass, PlaySquare, Clock, ThumbsUp, Download, Film, Gamepad2, Newspaper, Trophy, Settings, Flag, HelpCircle, MessageSquare } from 'lucide-react';
import { Button } from './ui/button';

const sidebarItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Compass, label: 'Explore' },
  { icon: PlaySquare, label: 'Subscriptions' },
];

const libraryItems = [
  { icon: Clock, label: 'History' },
  { icon: PlaySquare, label: 'Your videos' },
  { icon: Clock, label: 'Watch later' },
  { icon: ThumbsUp, label: 'Liked videos' },
  { icon: Download, label: 'Downloads' },
];

const exploreItems = [
  { icon: Film, label: 'Movies' },
  { icon: Gamepad2, label: 'Gaming' },
  { icon: Newspaper, label: 'News' },
  { icon: Trophy, label: 'Sports' },
];

interface YouTubeSidebarProps {
  collapsed?: boolean;
}

export function YouTubeSidebar({ collapsed = false }: YouTubeSidebarProps) {
  if (collapsed) {
    return (
      <aside className="w-16 bg-youtube-sidebar-bg border-r border-youtube-border">
        <div className="p-2 space-y-1">
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              size="sm"
              className={`w-12 h-12 p-0 flex flex-col items-center text-xs ${
                item.active
                  ? 'text-youtube-text bg-youtube-hover'
                  : 'text-youtube-text-secondary hover:bg-youtube-hover hover:text-youtube-text'
              }`}
            >
              <item.icon className="w-5 h-5 mb-1" />
              <span className="text-[10px] leading-none">{item.label}</span>
            </Button>
          ))}
        </div>
      </aside>
    );
  }

  return (
    <aside className="w-60 bg-youtube-sidebar-bg border-r border-youtube-border overflow-y-auto">
      <div className="p-3">
        {/* Main navigation */}
        <div className="space-y-1 mb-6">
          {sidebarItems.map((item) => (
            <Button
              key={item.label}
              variant="ghost"
              className={`w-full justify-start text-sm font-normal ${
                item.active
                  ? 'text-youtube-text bg-youtube-hover'
                  : 'text-youtube-text-secondary hover:bg-youtube-hover hover:text-youtube-text'
              }`}
            >
              <item.icon className="w-5 h-5 mr-3" />
              {item.label}
            </Button>
          ))}
        </div>

        {/* Library section */}
        <div className="border-t border-youtube-border pt-3 mb-6">
          <h3 className="text-youtube-text font-medium text-sm mb-2 px-3">Library</h3>
          <div className="space-y-1">
            {libraryItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start text-sm font-normal text-youtube-text-secondary hover:bg-youtube-hover hover:text-youtube-text"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Explore section */}
        <div className="border-t border-youtube-border pt-3 mb-6">
          <h3 className="text-youtube-text font-medium text-sm mb-2 px-3">Explore</h3>
          <div className="space-y-1">
            {exploreItems.map((item) => (
              <Button
                key={item.label}
                variant="ghost"
                className="w-full justify-start text-sm font-normal text-youtube-text-secondary hover:bg-youtube-hover hover:text-youtube-text"
              >
                <item.icon className="w-5 h-5 mr-3" />
                {item.label}
              </Button>
            ))}
          </div>
        </div>

        {/* Footer */}
        <div className="border-t border-youtube-border pt-3">
          <div className="space-y-1">
            <Button variant="ghost" className="w-full justify-start text-sm font-normal text-youtube-text-secondary hover:bg-youtube-hover hover:text-youtube-text">
              <Settings className="w-5 h-5 mr-3" />
              Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm font-normal text-youtube-text-secondary hover:bg-youtube-hover hover:text-youtube-text">
              <Flag className="w-5 h-5 mr-3" />
              Report history
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm font-normal text-youtube-text-secondary hover:bg-youtube-hover hover:text-youtube-text">
              <HelpCircle className="w-5 h-5 mr-3" />
              Help
            </Button>
            <Button variant="ghost" className="w-full justify-start text-sm font-normal text-youtube-text-secondary hover:bg-youtube-hover hover:text-youtube-text">
              <MessageSquare className="w-5 h-5 mr-3" />
              Send feedback
            </Button>
          </div>
        </div>
      </div>
    </aside>
  );
}