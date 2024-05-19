import { Article } from "./articles/Article";
import style from './ArticleListCard.module.scss';
import { Link } from "react-router-dom";
import { formatArticleDate } from "./utils";

interface ArticleListCardProps {
  article: Article;
}

export function ArticleListCard({ article }: ArticleListCardProps) {
  return (
    <div className={style['article-list-card']}>
      <Link to={`/blog/${article.slug}`}>
        <h2>{article.title}</h2>
        <h4>{formatArticleDate(article.publishDate)}</h4>
        <div>
          {article.tags.map((t) => (
            <span key={t}>{t}</span>
          ))}
        </div>
      </Link>
    </div>
  );
}