import { allArticles } from "../articles";
import { useParams } from "react-router-dom";
import { PageWrapper } from "@burkel24/burke-sh-common";
import { formatArticleDate } from "../utils";
import ArticleTag from "../ArticleTag";
import styles from './ArticleDetail.module.scss';

const ArticleDetail = () => {
  const { slug } = useParams()
  const article = allArticles.find((a) => a.slug === slug);
  if (!article) {
    return <h1>Article not found</h1>
  }

  return (
    <PageWrapper>
      <h1>{article.title}</h1>
      <h4>{formatArticleDate(article.publishDate)}</h4>

      <div className={styles['tag-wrapper']}>
        {article.tags.map((t) => (
          <ArticleTag tag={t} key={t} />
        ))}
      </div>

      {article.content}
    </PageWrapper>
  );
}

export default ArticleDetail;
