import React, { useContext, useState } from 'react'
import { CounterContext } from '../../providers/CounterContext';

const CounterControls = () => {
    const {setCounter, subtrair , adicionar} = useContext(CounterContext)
    const [numberInput, setNumberInput] = useState("")
  return (
    <div>
      <input type="number" value={numberInput} onChange={(e) => setNumberInput(e.target.value)}/>
      <button onClick={() => adicionar(Number(numberInput))}>+</button>
      <button onClick={() => subtrair(Number(numberInput))}>-</button>
      <button onClick={() => setCounter(0)}>Limpar contador</button>
    </div>
  )
}

export default CounterControls;
