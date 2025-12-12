import Link from 'next/link';
import { getEssaysByTag, getAllTagSlugs } from '@/lib/content';
import { EssayCard } from '@/components/essay/EssayCard';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ tag: string }>;
}

export async function generateStaticParams() {
  const tags = getAllTagSlugs();
  return tags.map((tag) => ({ tag }));
}

export async function generateMetadata({ params }: PageProps) {
  const { tag } = await params;
  return {
    title: `#${tag}`,
    description: `标签 #${tag} 下的所有文章`,
  };
}

export default async function TagPage({ params }: PageProps) {
  const { tag } = await params;
  const essays = getEssaysByTag(tag);

  return (
    <div>
      {/* 返回链接 */}
      <Link
        href="/tags"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        所有标签
      </Link>

      <h1 className="text-3xl font-bold mb-2">#{tag}</h1>
      <p className="text-muted-foreground mb-8">
        共 {essays.length} 篇文章
      </p>

      <div className="divide-y">
        {essays.map((essay) => (
          <EssayCard
            key={essay.slug}
            slug={essay.slug}
            title={essay.title}
            excerpt={essay.excerpt}
            publishedAt={essay.publishedAt}
            tags={essay.tags}
          />
        ))}
      </div>
    </div>
  );
}
