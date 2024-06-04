import React, { useContext } from 'react'
import { CounterContext } from '../../providers/CounterContext'
import CounterControls from '../CounterControls'

const Counter = () => {
    const {counter} = useContext(CounterContext)
  return (
    <div>
      <span>{counter}</span>
      <CounterControls/>
    </div>
  )
}

export default Counter
