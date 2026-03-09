const FormDropdown = ({ label, register, name, options }) => {
  return (
    <div>
      <label>{label}</label>

      <select {...register(name)}>
        <option value="">Select</option>

        {options.map((item) => (
          <option key={item.value} value={item.value}>
            {item.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default FormDropdown;