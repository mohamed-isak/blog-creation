import * as React from "react";
import {
  Nav,
  INavLink,
  INavStyles,
  INavLinkGroup,
} from "@fluentui/react/lib/Nav";

const navStyles: Partial<INavStyles> = {
  root: {
    width: 200,
    height: 450,
    boxSizing: "border-box",
    border: "1px solid #eee",
    overflowY: "auto",
  },
};

const navLinkGroups: INavLinkGroup[] = [
  {
    links: [
      {
        name: "Home",
        url: "/",
        key: "key1",
        isExpanded: true,
        target: "_blank",
      },
      {
        name: "Create",
        url: "/create",
        key: "key2",
      },
      {
        name: "Manage Blog",
        url: "/blogList",
        key: "key3",
      },
    ],
  },
];

const SideNav: React.FunctionComponent = () => {
  return (
    <div>
      <p className="sideNavLogo">Logo</p>
      <Nav
        onLinkClick={_onLinkClick}
        selectedKey="key1"
        ariaLabel="Nav basic example"
        styles={navStyles}
        groups={navLinkGroups}
      />
    </div>
  );
};

function _onLinkClick(ev?: React.MouseEvent<HTMLElement>, item?: INavLink) {
  if (item && item.name === "News") {
    alert("News link clicked");
  }
}

export default SideNav;
