import { useParams, Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addItem } from "../features/cart/cartSlice";
import productsData from "../data/furniture.json";
import { useMemo } from "react";

const formatPrice = (price) =>
  `₹${price.toLocaleString("en-IN", { maximumFractionDigits: 0 })}`;

const SingleProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const product = useMemo(() => productsData.find((p) => p.id === id), [id]);
  const cartItems = useSelector((state) => state.cart.cartItems);
  const cartItem = cartItems.find((item) => item.productID === id);

  if (!product) {
    return (
      <div className="mt-20 text-center">
        <h2 className="text-3xl font-bold text-error">Product Not Found</h2>
        <Link to="/" className="btn btn-accent mt-6">
          Go Back Home
        </Link>
      </div>
    );
  }

  const { title, description, company, price, image } = product;

  const handleAddToCart = () => {
    dispatch(
      addItem({
        product: {
          cartID: id, // No selected color needed now
          productID: id,
          image,
          title,
          price,
          company,
          productColor: null,
          amount: 1,
        },
      })
    );
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 mt-10">
      {/* Breadcrumbs */}
      <div className="text-sm text-gray-500 dark:text-gray-300 mb-6">
        <Link to="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <span className="mx-2">{">"}</span>
        <Link to="/products" className="hover:text-primary transition-colors">
          Products
        </Link>
        <span className="mx-2">{">"}</span>
        <span className="text-gray-700 dark:text-gray-400">{title}</span>
      </div>
      {/* Product Info */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 bg-base-100 p-6 rounded-xl shadow-xl">
        {/* Image */}
        <img
          src={image}
          alt={title}
          className="w-full h-96 object-contain rounded-lg"
        />

        {/* Details */}
        <div>
          <h1 className="text-4xl font-bold mb-2 capitalize">{title}</h1>
          <p className="text-neutral-content text-lg mb-1 capitalize">
            by {company}
          </p>
          <p className="text-2xl font-bold text-primary mb-4">
            {formatPrice(price)}
          </p>
          <p className="mb-6 text-base leading-relaxed">{description}</p>

          {/* Add to Cart / Go to Cart */}
          {cartItem ? (
            <button
              className="px-6 py-3 bg-green-600 hover:bg-green-700 text-white font-semibold rounded-lg transition shadow-md"
              onClick={() => navigate("/cart")}
            >
              Go to Cart
            </button>
          ) : (
            <button
              className="px-6 py-3 bg-teal-600 hover:bg-teal-700 text-white font-semibold rounded-lg transition shadow-md"
              onClick={handleAddToCart}
            >
              Add to Bag
            </button>
          )}
        </div>
      </div>
    </section>
  );
};

export default SingleProduct;
