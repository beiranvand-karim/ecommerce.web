import { useContext, useEffect, useState } from 'react';
import axios from 'axios';

import { EnvironmentVariables } from '../injectables';

export const useFetchArticles = () => {
  const [originalArticles, setOriginalArticles] = useState(null);
  const [articles, setArticles] = useState(null);
  const [error, setError] = useState(null);
  const [articlesLoading, setArticlesLoading] = useState(false);
  const { DATA_SOURCE_NETWORK_URL } = useContext(EnvironmentVariables);

  const fetchArticles = async () => {
    try {
      if (!DATA_SOURCE_NETWORK_URL) {
        return setError(new Error('Network data source URL is missing.'));
      }
      setArticlesLoading(true);
      const res = await axios.get(`${DATA_SOURCE_NETWORK_URL}/code-assignment/articles`, {
        headers: {
          market: 'SE',
          locale: 'sv-SE'
        }
      });
      setArticles(res.data.articles);
      setOriginalArticles(res.data.articles);
    } catch (capturedError) {
      /**
       * log the error to sentry, kibana ...
       * for example:
       * log({type: 'error', message: 'failed to fetch articles', data: {capturedError, userId})
       */
      setError(capturedError);
    } finally {
      setArticlesLoading(false);
    }
  };

  useEffect(() => {
    fetchArticles();
  }, []);

  const articlesError = error && 'Failed to fetch articles.';

  const filterArticlesByPriceAmount = (isActive, dividingPriceAmount) => {
    if (isActive) {
      const filterArticles = originalArticles?.filter(
        (article) => article.price.amount < dividingPriceAmount
      );
      Array.isArray(filterArticles) && filterArticles.length === 0
        ? setArticles(null)
        : setArticles(filterArticles);
    } else {
      setArticles(originalArticles);
    }
  };

  return { articles, articlesError, articlesLoading, filterArticlesByPriceAmount };
};
