import useStringHook from "../hooks/useStringHook";

const Example = () => {
  const { stringHookState, reverseString } = useStringHook();

  return (
   <>
    <h2>!EXAMPLE!</h2>
    <p>{stringHookState}</p>
    <button onClick={reverseString}>Reverse! Reverse!</button>
   </>
  )
}

export default Example