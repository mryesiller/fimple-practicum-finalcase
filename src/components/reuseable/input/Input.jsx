import React from "react";

const Input = (
  { name, info, type, label, onChange, error, step, defaultValue },
  ref
) => {
  return (
    <div className={`input__container`}>
      <input
        ref={ref}
        id={name}                                                                                             
        name={name}
        type={type}
        step={step}
        defaultValue={defaultValue}
        onChange={onChange}
      />
      <label className={`input__label`} htmlFor={name}>
        {label}
      </label>
      <span className={`input__info`}>{info}</span>
      {error && <p className={`input__error`}>{error}</p>}
    </div>
  );
};

export default React.forwardRef(Input);
