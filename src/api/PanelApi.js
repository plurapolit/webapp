import { fetchData } from './APIUtils';

const PanelApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const fetchAllPanels = () => {
    const panals = fetchData(`${URL}/panels`);
    return panals;
  };

  const fetchPanelById = (id) => {
    const panel = fetchData(`${URL}/panels/${id}`);
    return panel;
  };

  return {
    fetchAllPanels,
    fetchPanelById,
  };
};

export default PanelApi();
