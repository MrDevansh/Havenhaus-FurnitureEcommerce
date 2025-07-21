import { useState } from "react";
import { FormInput, SubmitBtn } from "../components";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { registerUser } from "../features/user/userSlice";
import { useDispatch, useSelector } from "react-redux";
import heroBg from "../assets/furniture-hero.jpg";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const registeredUsers = useSelector((state) => state.user.registeredUsers);

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.username.trim()) {
      newErrors.username = "Username is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Invalid email format";
    }
    if (!formData.password) {
      newErrors.password = "Password is required";
    } else if (formData.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }

    // Check if email already exists
    if (
      formData.email &&
      registeredUsers.some((user) => user.email === formData.email)
    ) {
      newErrors.email = "Email already registered";
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

    dispatch(registerUser(formData));
    toast.success("Account created successfully!");
    navigate("/login");
  };

  return (
    <section
      className="min-h-screen flex items-center justify-center bg-cover bg-center px-4"
      style={{ backgroundImage: `url(${heroBg})` }}
    >
      <div className="bg-white/90 backdrop-blur-md border border-gray-200 shadow-2xl rounded-2xl px-10 py-12 max-w-md w-full">
        <form onSubmit={handleSubmit} className="flex flex-col gap-y-6">
          <h2 className="text-4xl font-extrabold text-center text-[#B68C63] mb-2">
            Create Account
          </h2>

          <FormInput
            type="text"
            label="Username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            error={errors.username}
          />
          <FormInput
            type="email"
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={errors.email}
          />
          <FormInput
            type="password"
            label="Password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            error={errors.password}
          />
          <button
            type="submit"
            className="w-full py-3 bg-[#0D9488] text-white font-semibold rounded-lg shadow hover:bg-[#0b8076] transition duration-200"
          >
            Register
          </button>
          <p className="text-center text-sm text-gray-700">
            Already have an account?
            <Link
              to="/login"
              className="ml-2 text-[#0D9488] hover:text-[#B68C63] font-semibold transition-colors"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Register;
