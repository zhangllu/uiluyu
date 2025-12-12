import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getEssayBySlug, getAllEssaySlugs } from '@/lib/content';
import { EssayContent } from '@/components/essay/EssayContent';
import { EssayMeta } from '@/components/essay/EssayMeta';
import { Separator } from '@/components/ui/separator';
import { ArrowLeft } from 'lucide-react';

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllEssaySlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);
  if (!essay) return { title: '文章不存在' };
  return {
    title: essay.title,
    description: essay.excerpt,
  };
}

export default async function EssayPage({ params }: PageProps) {
  const { slug } = await params;
  const essay = getEssayBySlug(slug);

  if (!essay) {
    notFound();
  }

  return (
    <article>
      {/* 返回链接 */}
      <Link
        href="/"
        className="inline-flex items-center gap-1 text-sm text-muted-foreground hover:text-foreground transition-colors mb-8"
      >
        <ArrowLeft className="h-4 w-4" />
        返回首页
      </Link>

      {/* 文章标题 */}
      <h1 className="text-3xl font-bold">{essay.title}</h1>

      {/* 文章元信息 */}
      <div className="mt-4">
        <EssayMeta publishedAt={essay.publishedAt} tags={essay.tags} />
      </div>

      <Separator className="my-8" />

      {/* 文章内容 */}
      <EssayContent content={essay.content} />
    </article>
  );
}
