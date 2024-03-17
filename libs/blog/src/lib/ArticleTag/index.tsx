import { ArticleTags } from "../articles/Article";
import styles from './ArticleTag.module.scss';

interface ArticleTagProps {
  tag: ArticleTags;
}

const ArticleTag = ({ tag }: ArticleTagProps) => {
  return (
    <div className={styles['container']}>
      {tag}
    </div>
  )
};

export default ArticleTag;
