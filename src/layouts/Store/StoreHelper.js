import CategoryApi from '../../api/CategoryApi';

const StoreHelper = () => {
  const loadCategoryList = async (done) => {
    const data = await CategoryApi.fetchAllCategories();
    done(data.categories);
  };

  const loadSlugList = async (done) => {
    const slugs = [
      { slug: 'hello-there', id: 0 },
      { slug: '2020-co2-steuer', id: 1 },
    ];
    done(slugs);
  };

  return {
    loadCategoryList,
    loadSlugList,
  };
};

export default StoreHelper();
