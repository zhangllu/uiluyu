import { TagBadge } from './TagBadge';

interface EssayMetaProps {
  publishedAt: Date;
  tags: string[];
}

export function EssayMeta({ publishedAt, tags }: EssayMetaProps) {
  const formattedDate = publishedAt.toLocaleDateString('zh-CN', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="flex flex-wrap items-center gap-3 text-sm text-muted-foreground">
      <time dateTime={publishedAt.toISOString()}>{formattedDate}</time>
      <span>·</span>
      <div className="flex flex-wrap gap-2">
        {tags.map((tag) => (
          <TagBadge key={tag} tag={tag} href={`/tags/${tag}`} />
        ))}
      </div>
    </div>
  );
}
