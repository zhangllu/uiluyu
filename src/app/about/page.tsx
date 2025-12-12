export const metadata = {
  title: '关于',
  description: '关于路屿',
};

export default function AboutPage() {
  return (
    <div className="prose prose-lg max-w-none">
      <h1 className="text-3xl font-bold mb-8">关于</h1>
      
      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">路屿</h2>
        <p className="text-muted-foreground leading-relaxed">
          认知写作者｜框架探索者｜叙事理论实践者
        </p>
      </section>

      <section className="mb-8">
        <h2 className="text-xl font-medium mb-4">关于这里</h2>
        <p className="text-muted-foreground leading-relaxed mb-4">
          通过人物、故事与思想对撞，提炼结构洞见的写作者。
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          研究人物、思想与叙事如何塑造人的自我。拆解框架，揭示结构，关注能动性与自由。
        </p>
        <p className="text-muted-foreground leading-relaxed mb-4">
          不提供正确答案，更关心问题背后的机制。
        </p>
        <p className="text-muted-foreground/80 italic">
          如果你对"深度理解"比"快速解决"更感兴趣，你会喜欢这里。
        </p>
      </section>

      <section>
        <h2 className="text-xl font-medium mb-4">联系</h2>
        <p className="text-muted-foreground">
          代码仓库：
          <a
            href="https://cnb.cool/luyu1008/uiluyu"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:underline ml-1"
          >
            cnb.cool/luyu1008/uiluyu
          </a>
        </p>
      </section>
    </div>
  );
}
