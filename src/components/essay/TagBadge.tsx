import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

interface TagBadgeProps {
  tag: string;
  href?: string;
  size?: 'sm' | 'md';
}

export function TagBadge({ tag, href, size = 'sm' }: TagBadgeProps) {
  const badge = (
    <Badge
      variant="secondary"
      className={cn(
        'cursor-pointer transition-colors hover:bg-secondary/80',
        size === 'sm' ? 'text-xs' : 'text-sm'
      )}
    >
      #{tag}
    </Badge>
  );

  if (href) {
    return <Link href={href}>{badge}</Link>;
  }

  return badge;
}
