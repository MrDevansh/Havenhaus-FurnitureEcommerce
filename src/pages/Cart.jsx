import { useSelector } from "react-redux";
import { CartItemsList, SectionTitle, CartTotals } from "../components";
import { Link } from "react-router-dom";
import { useState } from "react";
import Modal from "../components/Modal";
import CheckoutForm from "../components/CheckoutForm";

const EmptyCartIllustration = () => (
  <svg
    className="w-40 h-40 mb-6 opacity-40"
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 64 64"
    stroke="currentColor"
    strokeWidth={2}
  >
    <circle cx="32" cy="32" r="30" stroke="#bfa870" strokeWidth="3" />
    <path d="M20 24h24l-4 20H24z" stroke="#bfa870" />
    <circle cx="24" cy="48" r="2" fill="#bfa870" />
    <circle cx="40" cy="48" r="2" fill="#bfa870" />
    <line x1="18" y1="24" x2="46" y2="24" stroke="#bfa870" strokeWidth="2" />
  </svg>
);

const Cart = () => {
  const user = useSelector((state) => state.user?.user);
  const numItems = useSelector((state) => state.cart?.numItemsInCart);

  const [showCheckoutModal, setShowCheckoutModal] = useState(false);

  // Empty Cart view
  if (!numItems || numItems === 0) {
    return (
      <section className="min-h-[80vh] flex flex-col items-center justify-center bg-white dark:bg-gray-900 px-4 text-center transition-colors duration-300">
        <EmptyCartIllustration />
        <SectionTitle text="Your cart is empty" />
        <p className="text-gray-600 dark:text-gray-400 max-w-md mt-4 mb-6">
          Looks like you haven’t added any products yet. Start exploring our
          curated collection.
        </p>
        <Link
          to="/products"
          className="inline-block px-8 py-3 bg-gradient-to-r from-[#0D9488] to-[#BFA870] text-white rounded-full font-semibold shadow-lg hover:opacity-90 transition-opacity duration-300"
        >
          Browse Products
        </Link>
      </section>
    );
  }

  // Filled Cart view
  return (
    <section className="min-h-screen bg-white dark:bg-gray-900 px-4 sm:px-6 lg:px-8 py-10 rounded-t-3xl transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <header className="mb-12 text-center">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-gray-100 tracking-tight">
            Shopping Cart
          </h1>
          <p className="mt-2 text-lg text-gray-600 dark:text-gray-400">
            You have <span className="font-semibold">{numItems}</span> item
            {numItems > 1 ? "s" : ""} in your bag.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Cart items */}
          <article className="lg:col-span-8 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
            <CartItemsList />
          </article>

          {/* Cart summary */}
          <aside className="lg:col-span-4 bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-lg border border-gray-200 dark:border-gray-700 flex flex-col gap-6">
            <CartTotals />

            {user ? (
              <>
                <button
                  onClick={() => setShowCheckoutModal(true)}
                  className="w-full bg-gradient-to-r from-[#0D9488] to-[#BFA870] text-white py-4 rounded-full font-semibold shadow-md hover:opacity-90 transition-opacity duration-300 select-none"
                >
                  Proceed to Checkout
                </button>

                <Modal
                  open={showCheckoutModal}
                  onClose={() => setShowCheckoutModal(false)}
                >
                  <h2 className="text-2xl text-[#0D9488] font-extrabold mb-6 text-center">
                    Checkout
                  </h2>
                  <CheckoutForm onSuccess={() => setShowCheckoutModal(false)} />
                </Modal>
              </>
            ) : (
              <Link
                to="/login"
                className="block w-full text-center bg-gradient-to-r from-[#0D70B8] to-[#8A2BE2] py-4 rounded-full font-semibold text-white shadow-md hover:opacity-90 transition-opacity duration-300 select-none"
              >
                Please Login to Checkout
              </Link>
            )}
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Cart;
