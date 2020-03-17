import React, { useContext } from "react";

const PanelContext = React.createContext();
const { Provider } = PanelContext;

const PanelStore = ({
  children,
  panel,
}) => (
  <Provider value={{
    fontColor: panel.panel.font_color,
    avatarKey: panel.panel_avatar_key,
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
