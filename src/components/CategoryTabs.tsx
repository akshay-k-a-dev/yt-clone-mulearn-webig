import { Button } from './ui/button';

const categories = [
  'All',
  'Gaming',
  'Music',
  'eFootball',
  'Bleach',
  'Mixes',
  'T-Series',
  'Live',
  'Tamil Cinema',
  'AI',
  'EA Sports FC Mobile',
  'Comedy',
  'Podcasts',
  'Recently uploaded'
];

export function CategoryTabs() {
  return (
    <div className="flex items-center space-x-3 px-6 py-3 bg-youtube-dark-bg border-b border-youtube-border overflow-x-auto">
      {categories.map((category, index) => (
        <Button
          key={category}
          variant={index === 0 ? "default" : "youtube"}
          size="sm"
          className={`flex-shrink-0 ${
            index === 0
              ? 'bg-youtube-text text-youtube-dark-bg hover:bg-youtube-text/90'
              : ''
          }`}
        >
          {category}
        </Button>
      ))}
    </div>
  );
}