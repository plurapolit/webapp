import CategoryApi from '../../api/CategoryApi';

const StoreHelper = () => {
  const loadCategories = async (done) => {
    const categories = await CategoryApi.fetchAllCategories();
    done(categories);
  };

  return {
    loadCategories,
  };
};

export default StoreHelper();
