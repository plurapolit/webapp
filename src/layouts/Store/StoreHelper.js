import PanelApi from '../../api/PanelApi';

const StoreHelper = () => {
  const loadPanels = async (done) => {
    const panels = await PanelApi.fetchAllPanels();
    console.log('panels ', panels);
    done(panels);
  };

  return {
    loadPanels,
  };
};

export default StoreHelper();
