import { useState, useMemo } from "react";
import { PaginationContainer, ProductsContainer } from "../components";
import productsData from "../data/furniture.json";

// Memoize the sort map so its reference never changes
const priceSortMap = {
  "Price : Low to High": (a, b) => a.price - b.price,
  "Price : High to Low": (a, b) => b.price - a.price,
};
const PRODUCTS_PER_PAGE = 15;

const Products = () => {
  const [sort, setSort] = useState("Price : Low to High");
  const [page, setPage] = useState(1);

  // Memoize sorted products; updates only if sort or productsData change
  const sortedProducts = useMemo(() => {
    // Instead of directly mutating, create a new array
    const arr = Array.isArray(productsData) ? productsData.slice() : [];
    const sortFn = priceSortMap[sort];
    if (sortFn) arr.sort(sortFn);
    return arr;
  }, [sort, productsData]);

  const totalPages = useMemo(
    () => Math.ceil(sortedProducts.length / PRODUCTS_PER_PAGE),
    [sortedProducts]
  );

  const paginatedProducts = useMemo(() => {
    const start = (page - 1) * PRODUCTS_PER_PAGE;
    return sortedProducts.slice(start, start + PRODUCTS_PER_PAGE);
  }, [sortedProducts, page]);

  // Handlers
  const handleSortChange = (v) => {
    setSort(v);
    setPage(1); // Reset page when sort order changes
  };
  const handlePageChange = setPage;

  return (
    <section className="mt-8">
      {/* Sort dropdown */}
      <div className="mb-4 flex justify-end">
        <label htmlFor="sort-select" className="sr-only">
          Sort by
        </label>
        <select
          id="sort-select"
          value={sort}
          onChange={(e) => handleSortChange(e.target.value)}
          className="border rounded px-3 py-2 shadow-sm focus:ring-[#0D9488] dark:bg-[#232832] dark:text-gray-100"
          aria-label="Sort products"
        >
          <option value="Price : Low to High">Price : Low to High</option>
          <option value="Price : High to Low">Price : High to Low</option>
        </select>
      </div>

      <PaginationContainer
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />

      <ProductsContainer
        products={paginatedProducts}
        totalProductsCount={sortedProducts.length}
        currentPage={page}
        productsPerPage={PRODUCTS_PER_PAGE}
      />

      <PaginationContainer
        currentPage={page}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </section>
  );
};

export default Products;
