import { useState } from 'react'
import useStringHook from './hooks/useStringHook'
import Example from './components/Example'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { stringHookState, helloWord, reverseString } = useStringHook();

  return (
    <>
      <h1>Custom Hooks</h1>
      <h4>---------StringHook--------</h4>
      <p>{stringHookState}</p>
      <p>{helloWord}</p>
      <button onClick={reverseString}>Reverse! Reverse!</button>
      <Example/>
    </>
  )
}

export default App
