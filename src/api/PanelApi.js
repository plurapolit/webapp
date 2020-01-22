import { fetchData } from './APIUtils';

const URL = process.env.REACT_APP_PANEL_URL;

export const fetchAllPanels = async () => {
  const panals = fetchData(URL);
  return panals;
};
