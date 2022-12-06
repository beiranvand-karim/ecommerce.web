import { filteringConfigurations, FilteringConfigurations } from '../injectables';

export const HomePage = () => {
  return (
    <FilteringConfigurations.Provider value={filteringConfigurations}>
      <span>Home page</span>
    </FilteringConfigurations.Provider>
  );
};
