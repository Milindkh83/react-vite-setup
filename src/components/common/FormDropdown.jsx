const FormDropdown = ({
  label,
  name,
  register,
  options = [],
  rules = {},
  errors,
  defaultValue = "",
}) => {
  const isRequired = rules?.required;

  return (
    <div className="mb-4 w-full">
      <label className="block text-sm font-medium text-black mb-1">
        {label}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>

      <select
        defaultValue={defaultValue}
        {...register(name, rules)}
        className={`w-sm px-3 py-2 border rounded-lg outline-none transition text-black`}
      >
        <option value="">Select</option>

        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {errors?.[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormDropdown;