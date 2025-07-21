import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { clearCart } from "../features/cart/cartSlice";
import { logoutUser } from "../features/user/userSlice";

const navLinks = [
  { to: "/products", label: "Shop" },
  { to: "/cart", label: "Cart" },
  { to: "/orders", label: "Orders" },
  { to: "/about", label: "About" },
];

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user?.user);
  const location = useLocation();

  const handleLogout = () => {
    dispatch(clearCart());
    dispatch(logoutUser());
    navigate("/");
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white dark:bg-[#191919] shadow-md py-2 sm:py-3 text-[#232B2B] dark:text-[#F0ECE5] font-sans transition-all select-none">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 sm:px-8">
        {/* Brand Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-2xl font-extrabold tracking-tight select-none"
        >
          <span className="text-[#0D9488]">Haven</span>
          <span className="text-[#B68C63]">haus</span>
        </Link>
        {/* Navigation */}
        <nav className="hidden md:flex gap-6 text-base font-semibold">
          {navLinks.map((nav) => (
            <Link
              key={nav.to}
              to={nav.to}
              className={`px-2 py-1 rounded transition-colors duration-200 
                hover:text-[#0D9488] hover:bg-[#F3FAFA] dark:hover:bg-[#232822]
                ${
                  location.pathname === nav.to
                    ? "text-[#B68C63] underline underline-offset-4"
                    : "text-[#343434]"
                }`}
            >
              {nav.label}
            </Link>
          ))}
        </nav>
        {/* Auth and Salutation */}
        <div className="flex items-center gap-4 ml-4">
          {user ? (
            <>
              <span className="hidden sm:inline text-base font-medium tracking-tight px-3 py-1 rounded bg-[#F5F5F4] dark:bg-[#27221E] text-[#0D9488] dark:text-[#B68C63]">
                👋&nbsp;Hi, <span className="font-bold">{user.username}</span>
              </span>
              <button
                className="px-4 py-1.5 text-sm rounded-full border border-[#B68C63] text-[#B68C63] hover:bg-[#B68C63] hover:text-white transition font-semibold"
                onClick={handleLogout}
              >
                Logout
              </button>
            </>
          ) : (
            <div className="flex gap-2 sm:gap-4 text-base">
              <Link
                to="/login"
                className="px-3 py-1.5 rounded transition font-medium hover:text-white hover:bg-[#0D9488] focus-visible:ring-2 ring-[#0D9488]"
              >
                Sign in / Guest
              </Link>
              <Link
                to="/register"
                className="px-3 py-1.5 rounded transition font-medium bg-[#B68C63] text-white hover:text-[#232B2B] hover:bg-[#ebccaa] focus-visible:ring-2 ring-[#B68C63]"
              >
                Create Account
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
