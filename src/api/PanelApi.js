import { fetchData } from './APIUtils';

const URL = 'http://localhost:3004/panels';

export const fetchAllPanels = async (callback) => {
  const panals = await fetchData(URL);
  callback(panals);
};
