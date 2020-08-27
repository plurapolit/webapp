import { BASE_URL, fetchBody } from "./APIUtils";

const loadRegion = (id) => {
  const region = fetchBody(`${BASE_URL}/regions/${id}`);
  return region;
};

const loadAllRegions = () => {
  const regions = fetchBody(`${BASE_URL}/regions`);
  return regions;
};

export default {
  loadRegion,
  loadAllRegions,
};
