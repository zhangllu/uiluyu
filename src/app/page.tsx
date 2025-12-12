import { getAllEssays } from '@/lib/content';
import { EssayCard } from '@/components/essay/EssayCard';
import { Separator } from '@/components/ui/separator';

export default function HomePage() {
  const essays = getAllEssays();

  return (
    <div>
      {/* 网站介绍 */}
      <section className="mb-12">
        <h1 className="text-3xl font-bold">路屿</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          认知写作者｜框架探索者｜叙事理论实践者
        </p>
        <p className="mt-2 text-muted-foreground">
          通过人物、故事与思想对撞，提炼结构洞见。
          研究人物、思想与叙事如何塑造人的自我。
        </p>
        <p className="mt-4 text-sm text-muted-foreground/80 italic">
          如果你对"深度理解"比"快速解决"更感兴趣，你会喜欢这里。
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
