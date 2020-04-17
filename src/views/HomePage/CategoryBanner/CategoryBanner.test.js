import React from "react";
import { shallow } from "enzyme";

import CategoryBanner from "./CategoryBanner";
import PanelList from "../PanelList/PanelList";

const setup = (propOverrides) => {
  const props = {
    name: "name",
    imageUrl: "imageUrl",
    color: "color",
    panels: "panels",
    ...propOverrides,
  };
  const wrapper = shallow(
    <CategoryBanner
      name={props.name}
      imageUrl={props.imageUrl}
      color={props.color}
      panels={props.panels}
    />,
  );
  return {
    wrapper,
  };
};

describe("<CategoryBanner />", () => {
  it("should render a section with class category-banner", () => {
    const { wrapper } = setup();
    expect(wrapper.find(".category-banner")).toHaveLength(1);
  });

  it("should set image old tag depending on prop name", () => {
    const name = "custom name";
    const { wrapper } = setup({ name });
    expect(wrapper.find("img").props().alt).toMatch(name);
  });

  it("should set background color of section depending on prop color", () => {
    const customColor = "custom color";
    const { wrapper } = setup({ color: customColor });
    expect(wrapper.find("section").props().style["--bg"]).toMatch(customColor);
  });

  it("should render component <PanelList data={customPanels} />", () => {
    const customPanels = "custom Panels";
    const { wrapper } = setup({ panels: customPanels });
    expect(wrapper.find(PanelList).props().data).toMatch(customPanels);
  });
});
