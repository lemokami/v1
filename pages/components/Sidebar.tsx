import Link from "next/link";
import { useRouter } from "next/router";
import { FC } from "react";

type SidebarProps = {
  className: string;
};

const menuItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Projects", path: "/projects" },
  { name: "Contact", path: "/contact" },
];

const Sidebar: FC<SidebarProps> = ({ className }) => {
  const router = useRouter();

  return (
    <div
      className={`hidden xl:flex flex-col items-start p-10 ${
        className ? className : ""
      }`}
    >
      <Link href="/">
        <a className="brand">W</a>
      </Link>
      <div className="flex flex-col justify-center space-y-16 flex-1">
        {menuItems.map((item, index) => (
          <Link href={item.path} key={item.name + index}>
            <a
              className={`sidebar-link ${
                item.path === router.pathname ? "text-secondary" : ""
              }`}
            >
              {item.name}
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
