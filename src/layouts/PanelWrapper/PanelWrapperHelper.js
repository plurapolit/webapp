import PanelApi from '../../api/PanelApi';

const PanelWrapperHelper = () => {
  const loadPanelById = async (id, done) => {
    const panel = await PanelApi.fetchPanelById(id);
    done(panel);
  };

  return {
    loadPanelById,
  };
};

export default PanelWrapperHelper();
