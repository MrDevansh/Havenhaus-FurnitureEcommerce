import { Link } from "react-router-dom";

const ProductsList = ({ products }) => (
  <div className="mt-10 space-y-5">
    {products.map(({ id, title, price, image, company, description }) => (
      <Link
        key={id}
        to={`/products/${id}`}
        className="
          flex flex-col sm:flex-row items-center gap-4
          rounded-lg border border-gray-200 bg-white shadow-sm hover:shadow-md
          p-5 transition
        "
      >
        {/* Product Image */}
        <img
          src={image}
          alt={title}
          className="w-24 h-24 object-cover rounded-md flex-shrink-0"
          loading="lazy"
        />
        {/* Info */}
        <div className="flex-1 w-full">
          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4">
            <h3 className="font-semibold text-gray-900 text-lg">{title}</h3>
            <div className="text-gray-500 text-sm">{company}</div>
          </div>
          <p className="text-gray-600 text-sm mt-1 line-clamp-2">
            {description}
          </p>
        </div>
        {/* Price */}
        <div className="mt-2 sm:mt-0 font-bold text-gray-900 text-xl ml-0 sm:ml-4">
          ₹{price.toLocaleString()}
        </div>
      </Link>
    ))}
  </div>
);

export default ProductsList;
