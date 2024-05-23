import React, { forwardRef } from "react";

const Input = forwardRef(({ label, placeholder, type, id, ...rest }, ref) => {
  return (
    <div>
      <fieldset>
        {label ? <label>{label}</label> : null}
        <input
          type={type}
          placeholder={placeholder}
          id={id}
          ref={ref}
          {...rest}
        />
      </fieldset>
    </div>
  );
});

export default Input;
