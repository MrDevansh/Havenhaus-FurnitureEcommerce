import { NavLink } from "react-router-dom";

const routes = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Shop" },
  { to: "/orders", label: "Orders" },
];

const NavLinks = () =>
  routes.map(({ to, label }) => (
    <NavLink
      key={to}
      to={to}
      className={({ isActive }) =>
        "px-2 py-1.5 rounded transition " +
        (isActive
          ? "text-[#B68C63] underline underline-offset-4 font-bold"
          : "hover:text-[#0D9488] hover:bg-[#F7FAFA] dark:hover:bg-[#232822]")
      }
    >
      {label}
    </NavLink>
  ));

export default NavLinks;
