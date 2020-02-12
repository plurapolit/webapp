import CategoryApi from "../../api/CategoryApi";
import SlugApi from "../../api/SlugApi";
import JwtApi from "../../api/JwtApi";

const StoreHelper = () => {
  const loadCategoryList = async (done) => {
    const data = await CategoryApi.fetchAllCategories();
    done(data.categories);
  };

  const loadSlugList = async (done) => {
    const slugList = await SlugApi.fetchSlugList();
    done(slugList);
  };

  const loadContent = async (done) => {
    const promises = [
      CategoryApi.fetchAllCategories(),
      SlugApi.fetchSlugList(),
      JwtApi.validate(),
    ];
    const [dataCategories, slugs, user] = await Promise.all(promises);
    done(dataCategories.categories, slugs.panels, user.user);
  };

  return {
    loadCategoryList,
    loadSlugList,
    loadContent,
  };
};

export default StoreHelper();
