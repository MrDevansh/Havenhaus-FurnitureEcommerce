const FormSelect = ({ label, name, value, onChange, list }) => {
  return (
    <div className="form-control w-full">
      <label
        htmlFor={name}
        className="label text-sm font-medium text-gray-700 dark:text-gray-200"
      >
        {label}
      </label>
      <select
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className="select select-bordered w-full bg-white text-gray-800 dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
      >
        {list.map((item) => (
          <option key={item} value={item} className="dark:bg-gray-800">
            {item}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormSelect;
