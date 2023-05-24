import useStringHook from "../hooks/useStringHook";

const Example = () => {
  const { stringHookState, reverseString, doubleString, setstringHookState } = useStringHook();

  return (
   <>
    <h2>!EXAMPLE!</h2>
    <p>{stringHookState}</p>
    <input onChange={(e) => setstringHookState(e.target.value)} />
    <br/>
    <button onClick={reverseString}>Reverse! Reverse!</button>
    <button onClick={doubleString}>DOUBLE</button>
   </>
  )
}

export default Example