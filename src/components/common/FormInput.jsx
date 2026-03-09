import React from "react";

const FormInput = ({ label, register, name, errors, ...rest }) => {
  return (
    <div>
      <label>{label}</label>

      <input {...register(name)} {...rest} />

      {errors?.[name] && (
        <p className="error">{errors[name].message}</p>
      )}
    </div>
  );
};

export default FormInput;