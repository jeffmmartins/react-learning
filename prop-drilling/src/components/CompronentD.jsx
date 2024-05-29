import React from "react";
import { useContext } from "react";
import { ExampleContext } from "../providers/ExampleContext";

const CompronentD = () => {
  // retornando o valor que foi passado no provider
  const { example } = useContext(ExampleContext);
  return (
    <div>
      <p>{example}</p>
    </div>
  );
};

export default CompronentD;
