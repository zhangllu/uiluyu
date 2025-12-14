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
          关注青少年成长。
          <br />
          整合社会、心理、教育等多元视角，穿透主流话语的迷雾，看见真实，拥抱复杂，打开更多可能！
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
