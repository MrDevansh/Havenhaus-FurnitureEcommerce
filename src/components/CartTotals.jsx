import { useSelector } from "react-redux";

const CartTotals = () => {
  const { cartTotal, shipping, tax, orderTotal } = useSelector(
    (state) => state.cart
  );

  return (
    <div className="bg-white dark:bg-[#181A1B] rounded-xl shadow p-6 w-full max-w-sm mx-auto">
      {/* SUBTOTAL */}
      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
        <span>Subtotal</span>
        <span className="font-semibold">{cartTotal}</span>
      </div>
      {/* SHIPPING */}
      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
        <span>Shipping</span>
        <span className="font-semibold">{shipping}</span>
      </div>
      {/* TAX */}
      <div className="flex justify-between text-sm text-gray-700 dark:text-gray-200 border-b border-gray-200 dark:border-gray-700 pb-2 mb-2">
        <span>Tax</span>
        <span className="font-semibold">{tax}</span>
      </div>
      {/* ORDER TOTAL */}
      <div className="flex justify-between text-base border-none mt-3 pt-2 font-bold">
        <span className="text-[#0D9488] dark:text-[#B68C63]">Order Total</span>
        <span className="text-[#B68C63] dark:text-[#0D9488]">
          ₹{orderTotal}
        </span>
      </div>
    </div>
  );
};

export default CartTotals;
