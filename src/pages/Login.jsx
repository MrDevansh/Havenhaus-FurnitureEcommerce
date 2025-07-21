import { useState } from "react";
import { FormInput, SubmitBtn } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { loginUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import heroBg from "../assets/furniture-hero.jpg";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registeredUsers = useSelector((state) => state.user.registeredUsers);

  const [formData, setFormData] = useState({
    identifier: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!formData.identifier.trim()) {
      newErrors.identifier = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.identifier)) {
      newErrors.identifier = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    const foundUser = registeredUsers.find(
      (u) => u.email === formData.identifier && u.password === formData.password
    );

    if (foundUser) {
      dispatch(
        loginUser({ email: foundUser.email, password: foundUser.password })
      );
      toast.success("Logged in successfully!");
      navigate("/");
    } else {
      toast.error("Invalid email or password");
    }
  };

  const loginAsGuestUser = () => {
    const guestEmail = "test@test.com";
    const guestPassword = "secret";

    const guestUser = registeredUsers.find(
      (u) => u.email === guestEmail && u.password === guestPassword
    );

    if (guestUser) {
      dispatch(loginUser({ email: guestEmail, password: guestPassword }));
      toast.success("Welcome, guest user!");
      navigate("/");
    } else {
      // Register the guest user automatically
      const newGuest = {
        email: guestEmail,
        password: guestPassword,
        name: "Guest",
      };
      dispatch({ type: "user/registerUser", payload: newGuest });
      dispatch(loginUser({ email: guestEmail, password: guestPassword }));
      toast.success("Guest user registered and logged in!");
      navigate("/");
    }
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{
        backgroundImage: `url(${heroBg})`,
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="bg-white border border-gray-200 shadow-xl rounded-xl px-8 py-10 max-w-md w-full">
        <form onSubmit={handleSubmit} className="space-y-6">
          <h2 className="text-3xl font-bold text-center text-[#0D9488]">
            Welcome Back
          </h2>

          <FormInput
            type="email"
            name="identifier"
            label="Email"
            value={formData.identifier}
            onChange={handleChange}
            error={errors.identifier}
          />
          <FormInput
            type="password"
            name="password"
            label="Password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />

          <button
            type="submit"
            className="w-full py-3 bg-[#0D9488] text-white font-semibold rounded-lg shadow hover:bg-[#0b8076] transition duration-200"
          >
            Login
          </button>

          <button
            type="button"
            onClick={loginAsGuestUser}
            className="w-full py-2 rounded-md bg-gray-100 hover:bg-gray-200 text-gray-800 font-medium transition"
          >
            Login as Guest
          </button>

          <p className="text-center text-sm text-gray-600">
            Not a member yet?
            <Link
              to="/register"
              className="ml-1 text-[#0D9488] hover:text-[#B68C63] font-semibold"
            >
              Register
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
