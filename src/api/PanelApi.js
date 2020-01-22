import { fetchData } from './APIUtils';

const PanelApi = () => {
  const URL = process.env.REACT_APP_PANEL_URL;

  const fetchAllPanels = async () => {
    const panals = fetchData(URL);
    return panals;
  };

  return {
    fetchAllPanels,
  };
};

export default PanelApi();
