import { fetchData } from './APIUtils';

const PanelApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const fetchAllPanels = async () => {
    const panals = fetchData(`${URL}/panels`);
    return panals;
  };

  return {
    fetchAllPanels,
  };
};

export default PanelApi();
