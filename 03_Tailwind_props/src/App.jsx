/* eslint-disable react/no-unknown-property */
import { useState } from 'react'
import './App.css'
import Card from './Components/Card'

function App() {
  const [count, setCount] = useState(0);

  let myObj = {
    username: 'John',
    age: 25,
  }

  return (
    <>
      <Card username="ChaiAurCode" btnText="click me" />
      <Card username="Kuntal" btnText="follow" />

    </>
  )
}

export default App
