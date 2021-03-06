import PanelApi from "../../api/PanelApi";

const PanelWrapperHelper = () => {
  const ABOUT_US_SLUG = "2020-wir-uber-uns";

  const loadPanelById = async (id, done) => {
    const panel = await PanelApi.fetchPanelById(id);
    done(panel);
  };

  return {
    loadPanelById,
    ABOUT_US_SLUG,
  };
};

export default PanelWrapperHelper();
