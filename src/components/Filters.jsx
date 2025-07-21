import FormSelect from "./FormSelect";

const Filters = ({ filters, onFilter }) => {
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === "checkbox" ? checked : value;
    onFilter({ [name]: newValue });
  };

  return (
    <form className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 items-center bg-white dark:bg-gray-900 p-4 rounded-lg shadow-sm">
      {/* Sort Dropdown */}
      <FormSelect
        label="Sort By"
        name="sort"
        value={filters.sort}
        onChange={handleChange}
        list={["Price : Low to High", "Price : High to Low"]}
      />
    </form>
  );
};

export default Filters;
