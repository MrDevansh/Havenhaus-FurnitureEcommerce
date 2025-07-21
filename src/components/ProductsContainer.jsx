import { useState } from "react";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { BsFillGridFill, BsList } from "react-icons/bs";

const ProductsContainer = ({
  products = [],
  totalProducts,
  totalProductsCount,
  currentPage,
  productsPerPage,
}) => {
  const [layout, setLayout] = useState("grid");
  const setActiveStyles = (pattern) => {
    return `text-xl btn btn-circle btn-sm ${
      pattern === layout
        ? "bg-primary text-white"
        : "bg-transparent text-gray-800 dark:text-gray-200 border border-gray-300 dark:border-gray-600"
    }`;
  };

  return (
    <>
      {/* Header + View Toggle */}
      <div className="flex justify-between items-center mt-4 border-b border-gray-300 dark:border-gray-600 pb-5">
        <h4 className="font-medium text-md text-gray-800 dark:text-gray-100">
          {totalProductsCount > 0 ? (
            <>
              Showing {(currentPage - 1) * productsPerPage + 1}–
              {Math.min(currentPage * productsPerPage, totalProductsCount)} of{" "}
              {totalProductsCount} product{totalProductsCount !== 1 && "s"}
            </>
          ) : (
            <>No products found</>
          )}
        </h4>

        <div className="flex gap-x-2">
          <button
            type="button"
            onClick={() => setLayout("grid")}
            className={setActiveStyles("grid")}
          >
            <BsFillGridFill />
          </button>
          <button
            type="button"
            onClick={() => setLayout("list")}
            className={setActiveStyles("list")}
          >
            <BsList />
          </button>
        </div>
      </div>

      {/* Product Display */}
      <div>
        {products.length === 0 ? (
          <h5 className="text-2xl mt-16 text-gray-700 dark:text-gray-200">
            Sorry, no products matched your search...
          </h5>
        ) : layout === "grid" ? (
          <ProductsGrid products={products} />
        ) : (
          <ProductsList products={products} />
        )}
      </div>
    </>
  );
};

export default ProductsContainer;
