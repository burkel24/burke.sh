
import { PageWrapper } from '@burkel24/burke-sh-common';
import { ArticleListCard } from './ArticleListCard';
import { allArticles } from './articles';

/* eslint-disable-next-line */
export interface BlogLandingProps {}

export function BlogLanding(props: BlogLandingProps) {
  const articleElms = allArticles
    .sort((a, b) => a.publishDate.getTime() > b.publishDate.getTime() ? 1 : -1)
    .map((a) => <ArticleListCard key={a.slug} article={a} />);

  return (
    <PageWrapper>
      <h1>Recent Posts</h1>
      {articleElms}
    </PageWrapper>
  );
}

export default BlogLanding;
