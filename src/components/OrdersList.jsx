// src/components/OrdersList.jsx

const OrdersList = ({ orders }) => {
  if (!Array.isArray(orders) || orders.length === 0) {
    return (
      <div className="text-center text-gray-500 dark:text-gray-400 py-12">
        No orders found.
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-6 mt-6">
      {orders.map((order, idx) => (
        <div
          key={idx}
          className="border border-gray-200 dark:border-gray-700 rounded-lg p-6 shadow-sm bg-white dark:bg-[#1f1f1f]"
        >
          {/* Top Section */}
          <div className="flex flex-col sm:flex-row justify-between sm:items-center mb-4 gap-2">
            <div>
              <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-100">
                Order #{order.id || idx + 1}
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400">
                Placed on:{" "}
                {new Date(order.createdAt || Date.now()).toLocaleString()}
              </p>
            </div>

            {/* Status Badge */}
            <span
              className={`inline-block text-xs font-medium px-3 py-1 rounded-full ${
                order.status === "Shipped"
                  ? "bg-green-100 text-green-700 dark:bg-green-800 dark:text-green-200"
                  : order.status === "Processing"
                  ? "bg-yellow-100 text-yellow-700 dark:bg-yellow-800 dark:text-yellow-200"
                  : "bg-gray-100 text-gray-700 dark:bg-gray-800 dark:text-gray-200"
              }`}
            >
              {order.status || "Processing"}
            </span>
          </div>

          {/* Shipping Info */}
          <div className="text-sm text-gray-700 dark:text-gray-300 mb-4 space-y-1">
            <p>
              <span className="font-medium">Name:</span> {order.shippingName}
            </p>
            <p>
              <span className="font-medium">Address:</span>{" "}
              {order.shippingAddress}
            </p>
          </div>

          {/* Items List */}
          <div>
            <h4 className="text-sm font-semibold mb-2 text-gray-800 dark:text-gray-100">
              Items:
            </h4>
            <ul className="space-y-2">
              {order.items?.map((item, i) => (
                <li
                  key={i}
                  className="flex items-center justify-between text-sm text-gray-600 dark:text-gray-300"
                >
                  <span>
                    {item.productName || item.name} × {item.quantity}
                  </span>
                  <span>₹{item.price * item.quantity}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Total */}
          <div className="mt-4 text-right font-semibold text-md text-[#0D9488]">
            Total Paid: ₹{order.total}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrdersList;
