import { Article, ArticleTags } from "./Article";

export const TestArticle = new Article(
  "Test Article",
  'test',
  new Date(2024, 3, 17),
  [ArticleTags.Test, ArticleTags.Dev],
  <p>Test Article Content</p>
);
