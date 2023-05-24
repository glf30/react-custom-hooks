import { useState } from 'react'
import useStringHook from './hooks/useStringHook'
import useInput from './hooks/useInput'
import Example from './components/Example'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  const { stringHookState, helloWord, reverseString, doubleString, setstringHookState } = useStringHook();

  // const inputField = useInput()
  const firstName = useInput('fname','first name')
  const lastName = useInput('lname','Last Name')
  const email = useInput('ename', 'Email')

  return (
    <>
      <h1>Custom Hooks</h1>
      <h4>---------StringHook--------</h4>
      <p>{stringHookState}</p>
      <p>{helloWord}</p>
      {/* <input onChange={(e) => setstringHookState(e.target.value)} /> */}
      {/* <input {...inputField} />
      <br/>
      <button onClick={reverseString}>Reverse! Reverse!</button>
      <button onClick={doubleString}>DOUBLE</button> */}
      <Example/>
      <h3>First Name: {firstName.value}</h3>
      <input {...firstName} />
      <h3>Last Name: {lastName.value}</h3>
      <input {...lastName} />
      <h3>EMAIL: {email.value}</h3>
      <input {...email} />
    </>
  )
}

export default App
