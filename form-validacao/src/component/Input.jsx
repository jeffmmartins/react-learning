import React, { forwardRef } from "react";

const Input = forwardRef(({ label, type, id, placeholder, ...rest }, ref) => {
  return (
    <div>
      <fieldset>
        {label ? <label>{label}</label> : null}
        <input
          type={type}
          id={id}
          placeholder={placeholder}
          ref={ref}
          {...rest}
        />
      </fieldset>
    </div>
  );
});

export default Input
