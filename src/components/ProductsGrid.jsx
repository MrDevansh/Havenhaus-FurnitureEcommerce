import { Link } from "react-router-dom";

const ProductsGrid = ({ products }) => {
  return (
    <div className="pt-12 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const { id, title, price, image } = product;

        return (
          <Link
            key={id}
            to={`/products/${id}`}
            className="w-full rounded-lg overflow-hidden bg-white dark:bg-gray-800 
              shadow-lg hover:shadow-2xl transition duration-300"
          >
            <figure className="px-4 pt-4">
              <img
                src={image}
                alt={title}
                className="rounded-xl h-64 md:h-48 w-full object-contain"
              />
            </figure>
            <div className="p-4 text-center">
              <h2 className="capitalize tracking-wider font-semibold text-gray-900 dark:text-white">
                {title}
              </h2>
              <span className="mt-2 text-lg font-medium text-gray-700 dark:text-teal-300 block">
                ₹{price}
              </span>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default ProductsGrid;
