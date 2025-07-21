import { useRef } from "react";
import { Link } from "react-router-dom";
import furnitureData from "../data/furniture.json";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

// Only include specific IDs
const selectedIDs = [83, 19, 4, 73, 21, 48, 39];
const featured = furnitureData.filter((item) =>
  selectedIDs.includes(Number(item.id))
);

const FeaturedProducts = () => {
  const scrollRef = useRef(null);

  const scroll = (dir) => {
    const scrollAmount = scrollRef.current.offsetWidth;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <section className="pt-20 pb-10 bg-white-50 dark:bg-gray-900 rounded-xl">
      <div className="max-w-6xl mx-auto px-4">
        {/* Fancy Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-white mb-2 tracking-wide">
            ✨ Featured Collections
          </h2>
          <p className="text-gray-500 dark:text-gray-400 text-sm">
            Curated picks just for you
          </p>
        </div>

        <div className="relative">
          {/* Arrows */}
          <button
            onClick={() => scroll("left")}
            className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow p-2 rounded-full"
          >
            <FaChevronLeft />
          </button>
          <button
            onClick={() => scroll("right")}
            className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white dark:bg-gray-800 border border-gray-300 dark:border-gray-700 shadow p-2 rounded-full"
          >
            <FaChevronRight />
          </button>

          {/* Carousel */}
          <div
            ref={scrollRef}
            className="overflow-x-auto no-scrollbar scroll-smooth"
          >
            <div className="flex gap-6 px-12 min-w-fit">
              {featured.map(({ id, title, image, price }) => (
                <Link
                  key={id}
                  to={`/products/${id}`}
                  className="w-[300px] flex-shrink-0 bg-white dark:bg-[#1F2937] rounded-xl shadow hover:shadow-lg transition"
                >
                  <img
                    src={image}
                    alt={title}
                    className="h-48 w-full object-cover rounded-t-xl"
                    loading="lazy"
                  />
                  <div className="p-4 text-center">
                    <h3 className="font-semibold text-lg capitalize text-gray-800 dark:text-gray-100">
                      {title}
                    </h3>
                    <p className="text-primary font-bold mt-1">₹{price}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
