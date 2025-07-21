import { removeItem, editItem } from "../features/cart/cartSlice";
import { useDispatch } from "react-redux";
import { FaPlus, FaMinus, FaTrash } from "react-icons/fa";

const CartItem = ({ cartItem }) => {
  const dispatch = useDispatch();
  const { cartID, title, price, image, amount, company, productColor } =
    cartItem;

  const increase = () => dispatch(editItem({ cartID, amount: amount + 1 }));
  const decrease = () => {
    if (amount > 1) dispatch(editItem({ cartID, amount: amount - 1 }));
  };
  const removeItemFromTheCart = () => dispatch(removeItem({ cartID }));

  return (
    <article className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 border-b border-gray-200 dark:border-gray-700 py-6">
      {/* Product Image */}
      <div className="flex-shrink-0">
        <img
          src={image}
          alt={title}
          className="h-24 w-24 sm:h-28 sm:w-28 rounded-lg object-cover border border-gray-200 dark:border-gray-800"
        />
      </div>

      {/* Info */}
      <div className="flex-1 w-full space-y-2">
        <h3 className="text-lg font-semibold capitalize text-gray-900 dark:text-gray-100">
          {title}
        </h3>
        <p className="text-sm text-gray-500 dark:text-gray-400 capitalize">
          by {company}
        </p>

        {/* Color */}
        {productColor && (
          <div className="flex items-center gap-2 text-sm">
            <span className="text-gray-500 dark:text-gray-400">Color:</span>
            <span
              className="w-4 h-4 rounded-full border border-gray-300 dark:border-gray-600"
              style={{ backgroundColor: productColor }}
              title={productColor}
            />
          </div>
        )}

        {/* Quantity Controls */}
        <div className="flex items-center gap-4 mt-3">
          <button
            onClick={decrease}
            type="button"
            className="p-2 text-sm rounded border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100"
          >
            <FaMinus />
          </button>
          <span className="text-base font-medium text-gray-900 dark:text-white">
            {amount}
          </span>
          <button
            onClick={increase}
            type="button"
            className="p-2 text-sm rounded border border-gray-300 dark:border-gray-600 text-gray-800 dark:text-gray-100"
          >
            <FaPlus />
          </button>
        </div>

        {/* Remove Button */}
        <button
          onClick={removeItemFromTheCart}
          type="button"
          className="flex items-center gap-2 text-sm text-red-600 dark:text-red-400 mt-4"
        >
          <FaTrash />
          <span>Remove</span>
        </button>
      </div>

      {/* Price */}
      <div className="sm:text-right text-lg font-bold text-[#B68C63] mt-4 sm:mt-0 sm:ml-6">
        ₹{price}
      </div>
    </article>
  );
};

export default CartItem;
