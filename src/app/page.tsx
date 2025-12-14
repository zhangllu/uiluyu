import { getAllEssays } from '@/lib/content';
import { EssayCard } from '@/components/essay/EssayCard';
import { Separator } from '@/components/ui/separator';

const basePath = process.env.NODE_ENV === 'production' ? '/uiluyu' : '';

export default function HomePage() {
  const essays = getAllEssays();

  return (
    <div>
      {/* 网站介绍 */}
      <section className="mb-12">
        <div className="flex items-center gap-4 mb-4">
          <img
            src={`${basePath}/avatar.jpg`}
            alt="路屿"
            width={64}
            height={64}
            className="rounded-full object-cover"
          />
          <h1 className="text-3xl font-bold">路屿</h1>
        </div>
        <p className="mt-4 text-muted-foreground">
          关注青少年成长。融合社会、心理与教育的多元视角，穿透主流话语的迷雾，看见真实，拥抱复杂，打开更多可能。
        </p>
      </section>

      <Separator className="my-8" />

      {/* 最新文章 */}
      <section>
        <h2 className="text-xl font-medium mb-6">最新文章</h2>
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
      </section>
    </div>
  );
}
