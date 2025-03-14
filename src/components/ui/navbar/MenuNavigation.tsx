import { NavLink } from "react-router";
import { NavLinks } from "./navLinks";

interface Props {
  items: NavLinks[];
}

const MenuNavigation = ({ items }: Props) => {
  return (
    <ul className="flex gap-x-6 text-sm">
      {items.map((link) => (
        <li key={link.name}>
          <NavLink to={link.path}>{link.name}</NavLink>
        </li>
      ))}
    </ul>
  );
};

export default MenuNavigation;
