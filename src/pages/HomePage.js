import { filteringConfigurations, FilteringConfigurations } from '../injectables';

import { ArticlesSection } from '../components/articles';
import { FiltersSection } from '../components/filters';
import { useFetchArticles } from '../hooks';

export const HomePage = () => {
  const { articles, articlesError, articlesLoading, filterArticlesByPriceAmount } =
    useFetchArticles();

  return (
    <FilteringConfigurations.Provider value={filteringConfigurations}>
      {articles && <FiltersSection filterArticlesByPriceAmount={filterArticlesByPriceAmount} />}
      <ArticlesSection
        articles={articles}
        articlesError={articlesError}
        articlesLoading={articlesLoading}
        filterArticlesByPriceAmount={filterArticlesByPriceAmount}
      />
    </FilteringConfigurations.Provider>
  );
};
