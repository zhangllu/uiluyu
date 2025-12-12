import Link from 'next/link';
import { TagBadge } from './TagBadge';

interface EssayCardProps {
  title: string;
  excerpt: string;
  publishedAt: Date;
  tags: string[];
  slug: string;
}

export function EssayCard({ title, excerpt, publishedAt, tags, slug }: EssayCardProps) {
  const formattedDate = publishedAt.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <article className="group py-6">
      <Link href={`/essays/${slug}`} className="block">
        <h2 className="text-xl font-medium group-hover:text-primary transition-colors">
          {title}
        </h2>
      </Link>
      <p className="mt-2 text-muted-foreground line-clamp-2">
        {excerpt}
      </p>
      <div className="mt-3 flex items-center gap-3 text-sm text-muted-foreground">
        <time dateTime={publishedAt.toISOString()}>{formattedDate}</time>
        <span>·</span>
        <div className="flex gap-2">
          {tags.map((tag) => (
            <TagBadge key={tag} tag={tag} href={`/tags/${tag}`} />
          ))}
        </div>
      </div>
    </article>
  );
}
