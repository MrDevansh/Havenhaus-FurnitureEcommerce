import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser, toggleTheme } from "../features/user/userSlice";
import { useNavigate, NavLink } from "react-router-dom";
import { BsCart3, BsMoonFill, BsSunFill } from "react-icons/bs";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/about", label: "About" },
  { to: "/products", label: "Shop" },
  { to: "/orders", label: "Orders" },
];

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [mobileOpen, setMobileOpen] = useState(false);
  const numItemsInCart = useSelector(
    (state) => state.cart?.numItemsInCart || 0
  );
  const user = useSelector((state) => state.user?.user);

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    navigate("/");
    setMobileOpen(false);
  };
  const handleTheme = () => {
    dispatch(toggleTheme());
  };
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#1C1C1C] shadow-md transition-all">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-2 sm:py-3">
        {/* Brand */}
        <NavLink
          to="/"
          className="text-2xl sm:text-3xl font-extrabold tracking-tight select-none"
          onClick={() => setMobileOpen(false)}
        >
          <span className="text-[#0D9488]">Haven</span>
          <span className="text-[#B68C63]">haus</span>
        </NavLink>

        {/* Hamburger */}
        <button
          className="lg:hidden text-2xl text-[#2D2D2D] dark:text-[#EDEDED] ml-2"
          aria-label={mobileOpen ? "Close menu" : "Open menu"}
          onClick={() => setMobileOpen((prev) => !prev)}
        >
          {mobileOpen ? <FaTimes /> : <FaBarsStaggered />}
        </button>

        {/* Navigation Desktop */}
        <div className="hidden lg:flex gap-4 text-base font-semibold">
          {navLinks.map((nav) => (
            <NavLink
              key={nav.to}
              to={nav.to}
              className={({ isActive }) =>
                [
                  "px-2 py-1 rounded transition-colors duration-200",
                  isActive
                    ? "text-[#B68C63] font-bold"
                    : "text-[#343434] hover:text-[#0D9488] hover:bg-[#F3FAFA] dark:hover:bg-[#232822]",
                ].join(" ")
              }
            >
              {nav.label}
            </NavLink>
          ))}
        </div>

        {/* Right section: Actions */}
        <div className="flex items-center gap-3 sm:gap-5">
          {/* Theme Toggle */}
          <button
            className="text-xl text-[#B68C63] focus:outline-none"
            aria-label="Toggle theme"
            onClick={handleTheme}
          >
            <BsSunFill className="hidden dark:inline" />
            <BsMoonFill className="inline dark:hidden" />
          </button>
          {/* Auth Buttons */}
          {user ? (
            <>
              <span className="hidden sm:inline rounded-full px-3 py-1 text-sm font-medium bg-[#F3FAFA] dark:bg-[#232822] text-[#0D9488] dark:text-[#B68C63]">
                Hi, <span className="font-extrabold">{user.username}</span>
              </span>
              <button
                className="ml-1 px-3 py-1.5 text-sm rounded-full border border-[#B68C63] text-[#B68C63] font-semibold hover:bg-[#B68C63] hover:text-white transition"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <NavLink
                to="/login"
                className="px-3 py-1.5 text-sm rounded-full border border-[#0D9488] text-[#0D9488] font-semibold hover:bg-[#0D9488] hover:text-white transition"
                onClick={() => setMobileOpen(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="px-3 py-1.5 text-sm rounded-full border border-[#B68C63] text-[#B68C63] font-semibold hover:bg-[#B68C63] hover:text-white transition"
                onClick={() => setMobileOpen(false)}
              >
                Register
              </NavLink>
            </>
          )}
          {/* Cart Icon */}
          <NavLink
            to="/cart"
            className={({ isActive }) =>
              [
                "relative group text-2xl transition",
                isActive
                  ? "text-[#B68C63]"
                  : "text-[#2D2D2D] dark:text-[#EDEDED] hover:text-[#B68C63]",
              ].join(" ")
            }
            aria-label="View cart"
            onClick={() => setMobileOpen(false)}
          >
            <BsCart3 />
            {numItemsInCart > 0 && (
              <span className="absolute -top-1.5 -right-2 bg-[#B68C63] text-white text-xs font-semibold px-1.5 py-0.5 rounded-full shadow-sm border border-white dark:border-[#232822]">
                {numItemsInCart}
              </span>
            )}
          </NavLink>
        </div>
      </div>

      {/* Mobile Menu (slide-down) */}
      <div
        className={`lg:hidden fixed left-0 right-0 top-[52px] sm:top-[64px] bg-white dark:bg-[#232822] shadow-md transition-all duration-300 z-40 ${
          mobileOpen ? "block" : "hidden"
        }`}
      >
        <div className="flex flex-col py-3 gap-1">
          {navLinks.map((nav) => (
            <NavLink
              key={nav.to}
              to={nav.to}
              onClick={() => setMobileOpen(false)}
              className={({ isActive }) =>
                [
                  "block w-full px-6 py-2 rounded text-base transition font-semibold",
                  isActive
                    ? "text-[#B68C63] font-bold"
                    : "text-[#232B2B] dark:text-[#DADADA] hover:text-[#0D9488] hover:bg-[#F3FAFA] dark:hover:bg-[#232822]",
                ].join(" ")
              }
            >
              {nav.label}
            </NavLink>
          ))}
        </div>
      </div>
      {/* Add spacing to not cover page content */}
      <div className="h-[52px] sm:h-[64px] lg:h-[0]" />
    </nav>
  );
};

export default Navbar;
