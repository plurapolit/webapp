import CategoryApi from '../../api/CategoryApi';

const StoreHelper = () => {
  const loadCategoryList = async (done) => {
    const data = await CategoryApi.fetchAllCategories();
    done(data.categories);
  };

  const loadSlugList = async (done) => {
    const slugList = [
      { slug: 'hello-there', id: 0 },
      { slug: '2020-autos', id: 2 },
    ];
    done(slugList);
  };

  return {
    loadCategoryList,
    loadSlugList,
  };
};

export default StoreHelper();
