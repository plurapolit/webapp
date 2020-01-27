import CategoryApi from '../../api/CategoryApi';

const StoreHelper = () => {
  const loadCategories = async (done) => {
    const data = await CategoryApi.fetchAllCategories();
    done(data.categories);
  };

  return {
    loadCategories,
  };
};

export default StoreHelper();
