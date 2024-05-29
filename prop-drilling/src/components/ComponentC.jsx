import React from "react";

const ComponentC = ({children}) => {
  return (
    <div>
      <p>Exemplo Prop Drilling</p>
      {children}
    </div>
  );
};

export default ComponentC;
