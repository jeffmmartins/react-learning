import React from 'react';

interface CounterProps {
  initialValue: number;
}

export const Counter: React.FC<CounterProps> = ({ initialValue = 0}) => {
  const [count, setCount] = React.useState(initialValue);

  const increment = () => {
    setCount(count + 1);
  };

  const diminuir = () => {
    setCount(count - 1);
  };

  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={increment}>Increment</button>
      <button onClick={diminuir}>Diminuir</button>
    </div>
  );
};

export default Counter;