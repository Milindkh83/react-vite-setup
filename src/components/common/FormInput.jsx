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
    <div className="mb-4 w-full">
      <label className="block text-sm font-medium text-black mb-1">
        {label}
        {isRequired && <span className="text-red-500 ml-1">*</span>}
      </label>

      <input
        type={type}
        placeholder={placeholder}
        defaultValue={defaultValue}
        {...register(name, rules)}
        className={`w-sm px-3 py-2 border rounded-lg outline-none transition text-black
        `}
      />

      {errors?.[name] && (
        <p className="text-red-500 text-xs mt-1">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormInput;