import React, { useContext } from "react";

import TimeHelper from "../../helper/TimeHelper";

const PanelContext = React.createContext();
const { Provider } = PanelContext;

const PanelStore = ({
  children,
  panel,
}) => (
  <Provider value={{
    panelDate: TimeHelper.getDateFromString(panel.panel.created_at),
    fontColor: panel.panel.font_color,
    avatar: panel.panel_avatar,
    shortTitle: panel.panel.short_title,
    slug: panel.slug,
    title: panel.title,
    description: panel.panel.description,
    expertStatements: panel.expert_statements,
  }}
  >
    {children}
  </Provider>
);

const usePanelContext = () => useContext(PanelContext);

export { PanelStore, Provider as PanelProvider, usePanelContext };
