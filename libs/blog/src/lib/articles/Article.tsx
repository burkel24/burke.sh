import { ReactNode } from "react";

export enum ArticleTags {
  Dev = 'Dev',
  Test = 'Test',
  Other = 'Other',
}

export class Article {
  constructor(
    public title: string,
    public slug: string,
    public publishDate: Date,
    public tags: ArticleTags[],
    public content: ReactNode
  ) {}
}
