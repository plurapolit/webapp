import { fetchBody } from "./APIUtils";

const PanelApi = () => {
  const URL = process.env.REACT_APP_ROOT_URL;

  const fetchAllPanels = () => {
    const panels = fetchBody(`${URL}/panels`);
    return panels;
  };

  const fetchPanelById = (id) => {
    const panel = fetchBody(`${URL}/panels/${id}`);
    return panel;
  };

  return {
    fetchAllPanels,
    fetchPanelById,
  };
};

export default PanelApi();
