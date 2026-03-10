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
    <div style={{ marginBottom: "15px" }}>
      <label>
        {label}
        {isRequired && (
          <span style={{ color: "red", marginLeft: "4px" }}>*</span>
        )}
      </label>

      <select defaultValue={defaultValue} {...register(name, rules)}>
        <option value="">Select</option>

        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>

      {errors?.[name] && (
        <p style={{ color: "red", fontSize: "12px" }}>{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormDropdown;
