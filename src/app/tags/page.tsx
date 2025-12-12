import Link from 'next/link';
import { getAllTags } from '@/lib/content';
import { Badge } from '@/components/ui/badge';

export const metadata = {
  title: '标签',
  description: '按标签浏览文章',
};

export default function TagsPage() {
  const tags = getAllTags();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">标签</h1>
      <div className="flex flex-wrap gap-3">
        {tags.map((tag) => (
          <Link key={tag.slug} href={`/tags/${tag.slug}`}>
            <Badge
              variant="secondary"
              className="text-sm px-3 py-1.5 cursor-pointer hover:bg-secondary/80 transition-colors"
            >
              #{tag.name}
              <span className="ml-2 text-muted-foreground">({tag.count})</span>
            </Badge>
          </Link>
        ))}
      </div>
    </div>
  );
}
