import Link from 'next/link';
import { getArchiveGroups } from '@/lib/content';

export const metadata = {
  title: '归档',
  description: '按时间浏览所有文章',
};

export default function ArchivePage() {
  const groups = getArchiveGroups();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-8">归档</h1>
      <div className="space-y-8">
        {groups.map((group) => (
          <section key={`${group.year}-${group.month}`}>
            <h2 className="text-lg font-medium text-muted-foreground mb-4">
              {group.year}年{group.month}月
              <span className="ml-2 text-sm">({group.essays.length})</span>
            </h2>
            <ul className="space-y-3">
              {group.essays.map((essay) => (
                <li key={essay.slug}>
                  <Link
                    href={`/essays/${essay.slug}`}
                    className="group flex items-baseline gap-3"
                  >
                    <span className="text-sm text-muted-foreground shrink-0">
                      {essay.publishedAt.toLocaleDateString('zh-CN', {
                        month: '2-digit',
                        day: '2-digit',
                      })}
                    </span>
                    <span className="group-hover:text-primary transition-colors">
                      {essay.title}
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </div>
  );
}
