const PaginationContainer = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages < 2) return null;

  const pages = Array.from({ length: totalPages }, (_, index) => index + 1);

  const handlePrev = () => {
    const prevPage = currentPage === 1 ? totalPages : currentPage - 1;
    onPageChange(prevPage);
  };

  const handleNext = () => {
    const nextPage = currentPage === totalPages ? 1 : currentPage + 1;
    onPageChange(nextPage);
  };

  return (
    <div className="mt-10 flex justify-center">
      <div className="inline-flex rounded-lg border border-gray-200 bg-white shadow-sm overflow-hidden">
        <button
          onClick={handlePrev}
          className="px-4 py-2 text-gray-600 hover:bg-gray-50 transition whitespace-nowrap"
        >
          Prev
        </button>
        {pages.map((page) => (
          <button
            key={page}
            onClick={() => onPageChange(page)}
            className={`
              px-4 py-2
              border-l border-gray-200
              text-gray-700 transition
              ${
                currentPage === page
                  ? "bg-gray-100 font-bold shadow-inner cursor-default"
                  : "bg-white hover:bg-gray-50"
              }
            `}
            disabled={currentPage === page}
          >
            {page}
          </button>
        ))}
        <button
          onClick={handleNext}
          className="px-4 py-2 border-l border-gray-200 text-gray-600 hover:bg-gray-50 transition whitespace-nowrap"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default PaginationContainer;
