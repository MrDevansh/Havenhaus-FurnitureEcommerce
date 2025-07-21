const FormInput = ({ label, name, type, value, onChange, error }) => {
  return (
    <div className="mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1 capitalize"
      >
        {label}
      </label>

      <input
        type={type}
        name={name}
        id={name}
        value={value}
        onChange={onChange}
        className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-[#0D9488] transition ${
          error ? "border-red-500" : "border-gray-300"
        }`}
      />

      {error && <p className="text-red-600 text-sm mt-1">{error}</p>}
    </div>
  );
};

export default FormInput;
