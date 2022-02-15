import CustomLink from "@components/CustomLink";
import { useRouter } from "next/router";
import { useState } from "react";
import startsWith from "lodash/startsWith";

interface SidebarItemType {
  href?: string;
  icon?: string;
  name?: string;
  divider?: boolean;
  active?: boolean;
}

const sidebarItems: Array<SidebarItemType> = [
  {
    divider: true,
  },
  {
    href: "/content/reviews",
    icon: "joystick",
    name: "Reviews",
  },
  {
    href: "/content/projects",
    icon: "brush",
    name: "Projects",
  },
  {
    href: "/content/products",
    icon: "bag-fill",
    name: "Products",
  },
  {
    href: "/content/orders",
    icon: "cart-check-fill",
    name: "Orders",
  },
  {
    href: "/content/customers",
    icon: "file-earmark-person",
    name: "Customers",
  },
  {
    divider: true,
  },
  {
    href: "/models",
    icon: "diagram-2-fill",
    name: "Models",
  },
  {
    href: "/files",
    icon: "folder-fill",
    name: "Files",
  },
  // {
  //   href: "/statistics",
  //   icon: "clipboard-data",
  //   name: "Statistics",
  // },
  {
    href: "/applications",
    icon: "cpu-fill",
    name: "Applications",
  },
  {
    href: "/users",
    icon: "person-video2",
    name: "Users",
  },
  {
    href: "/settings",
    icon: "gear-fill",
    name: "Settings",
  },
];

const Sidebar = () => {
  const [expanded, setExpanded] = useState(true);
  const router = useRouter();

  return (
    <aside className={`jb-sidebar ${expanded && "jb-sidebar-expanded"}`}>
      <div className="jb-sidebar-item" onClick={() => setExpanded(!expanded)}>
        <div className="jb-sidebar-item-icon">
          <i className="bi-list-nested"></i>
        </div>
        <div className="jb-sidebar-item-text jb-sidebar-item-text-sm">Keep Expanded</div>
      </div>
      {sidebarItems.map((item: SidebarItemType, index) => {
        if (item.divider) return <div className="jb-sidebar-divider" key={index}></div>;

        item.active = false;
        if (startsWith(router.asPath, item.href)) item.active = true;

        return (
          <CustomLink href={item.href || "#"} key={index}>
            <div className={`jb-sidebar-item ${item.active && "jb-sidebar-item-active"}`}>
              <div className="jb-sidebar-item-icon">
                <i className={`bi-${item.icon}`}></i>
              </div>
              <div className="jb-sidebar-item-text">{item.name}</div>
            </div>
          </CustomLink>
        );
      })}
      <div className="jb-sidebar-item jb-sidebar-item-logout">
        <div className="jb-sidebar-item-icon">
          <i className="bi-box-arrow-right"></i>
        </div>
        <div className="jb-sidebar-item-text jb-sidebar-item-text">Logout</div>
      </div>
    </aside>
  );
};

export default Sidebar;
