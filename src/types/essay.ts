// 文章类型定义

export interface Essay {
  slug: string;
  title: string;
  content: string;
  excerpt: string;
  publishedAt: Date;
  updatedAt?: Date;
  tags: string[];
}

export interface EssayMeta {
  slug: string;
  title: string;
  excerpt: string;
  publishedAt: Date;
  tags: string[];
}

export interface Tag {
  slug: string;
  name: string;
  count: number;
}

export interface ArchiveGroup {
  year: number;
  month: number;
  essays: EssayMeta[];
}
