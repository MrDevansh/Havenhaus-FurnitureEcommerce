import { useDispatch, useSelector } from "react-redux";
import { addOrder } from "../features/orders/ordersSlice";
import { clearCart } from "../features/cart/cartSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { useState } from "react";

const CheckoutForm = ({ onSuccess }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((state) => state.user.user);
  const cart = useSelector((state) => state.cart);

  // State for form fields
  const [form, setForm] = useState({
    name: "",
    address: "",
  });
  const [errors, setErrors] = useState({});

  // Handle field changes
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  // Validate before submitting
  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.address.trim()) newErrors.address = "Address is required";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validate()) return;

    dispatch(
      addOrder({
        userEmail: user.email,
        items: cart.cartItems.map((item) => ({
          productName: item.title,
          quantity: item.amount,
          price: item.price,
        })),
        total: cart.cartTotal,
        shippingName: form.name,
        shippingAddress: form.address,
        createdAt: new Date().toISOString(),
      })
    );
    dispatch(clearCart());
    toast.success("Order placed successfully!");
    if (onSuccess) onSuccess(); // <--- this closes the modal in the cart
    navigate("/");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="space-y-6 bg-white p-6 rounded-2xl shadow"
    >
      <div>
        <label className="block font-medium text-gray-700 mb-1" htmlFor="name">
          Name
        </label>
        <input
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-[#0D9488]"
          type="text"
          name="name"
          id="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Recipient name"
        />
        {errors.name && (
          <div className="text-red-600 text-sm mt-1">{errors.name}</div>
        )}
      </div>
      <div>
        <label
          className="block font-medium text-gray-700 mb-1"
          htmlFor="address"
        >
          Address
        </label>
        <textarea
          className="w-full p-2 border rounded focus:outline-none focus:ring focus:ring-[#0D9488]"
          name="address"
          id="address"
          value={form.address}
          onChange={handleChange}
          placeholder="Delivery address"
          rows={3}
        />
        {errors.address && (
          <div className="text-red-600 text-sm mt-1">{errors.address}</div>
        )}
      </div>
      <button
        type="submit"
        className="btn btn-primary w-full mt-4 bg-[#0D9488] text-white font-semibold py-2 rounded-lg shadow hover:bg-[#0b8076] transition"
      >
        Place Order
      </button>
    </form>
  );
};

export default CheckoutForm;
