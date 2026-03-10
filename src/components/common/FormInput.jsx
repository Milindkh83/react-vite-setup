const FormInput = ({
  label,
  type = "text",
  name,
  register,
  rules = {},
  errors,
  placeholder,
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

      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, rules)}
      />

      {errors?.[name] && (
        <p style={{ color: "red", fontSize: "12px" }}>{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormInput;
