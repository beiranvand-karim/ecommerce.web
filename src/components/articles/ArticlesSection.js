import styled from 'styled-components';
import PropTypes from 'prop-types';

import { articleType } from '../../types';
import { Article } from './Article';

const PositionArticlesInMiddleWideScreen = styled.div`
  display: flex;
  flex-wrap: wrap;
  max-width: 1280px;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 70px;
`;

export const ArticlesSection = ({ articles, articlesLoading, articlesError }) => {
  return (
    <PositionArticlesInMiddleWideScreen>
      {articlesLoading && <span>articles loading ...</span>}
      {articlesError && <span>{articlesError}</span>}
      {articles && articles.map((article) => <Article key={article.articleId} article={article} />)}
    </PositionArticlesInMiddleWideScreen>
  );
};

ArticlesSection.propTypes = {
  articles: PropTypes.arrayOf(articleType),
  articlesLoading: PropTypes.bool,
  articlesError: PropTypes.string
};
