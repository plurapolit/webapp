import { fetchData } from './APIUtils';

const URL = 'http://localhost:3004/panels';

export const fetchAllPanels = async () => {
  const panals = fetchData(URL);
  return panals;
};
