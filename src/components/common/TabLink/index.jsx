import { TabLinkStyles } from "./styles";

function TabLink({isActive, children}) {
  return <TabLinkStyles $isActive={isActive}>{children}</TabLinkStyles>;
}

export default TabLink;
