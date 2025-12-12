interface EssayContentProps {
  content: string;
}

export function EssayContent({ content }: EssayContentProps) {
  // 简单的 Markdown 转 HTML（生产环境应使用 remark/rehype）
  const html = content
    .split('\n\n')
    .map((block) => {
      // 标题
      if (block.startsWith('## ')) {
        return `<h2 class="text-2xl font-semibold mt-8 mb-4">${block.slice(3)}</h2>`;
      }
      if (block.startsWith('### ')) {
        return `<h3 class="text-xl font-medium mt-6 mb-3">${block.slice(4)}</h3>`;
      }
      // 引用
      if (block.startsWith('> ')) {
        return `<blockquote class="border-l-4 border-primary/30 pl-4 italic text-muted-foreground my-4">${block.slice(2)}</blockquote>`;
      }
      // 列表
      if (block.startsWith('- ') || block.startsWith('1. ')) {
        const items = block.split('\n').map((line) => {
          const text = line.replace(/^[-\d.]\s*/, '');
          return `<li class="ml-4">${text}</li>`;
        });
        const tag = block.startsWith('1. ') ? 'ol' : 'ul';
        return `<${tag} class="my-4 space-y-2">${items.join('')}</${tag}>`;
      }
      // 段落
      if (block.trim()) {
        // 处理行内代码和粗体
        const processed = block
          .replace(/\*\*(.+?)\*\*/g, '<strong>$1</strong>')
          .replace(/`(.+?)`/g, '<code class="bg-muted px-1.5 py-0.5 rounded text-sm">$1</code>');
        return `<p class="my-4 leading-relaxed">${processed}</p>`;
      }
      return '';
    })
    .join('');

  return (
    <div
      className="prose prose-lg max-w-none"
      dangerouslySetInnerHTML={{ __html: html }}
    />
  );
}
