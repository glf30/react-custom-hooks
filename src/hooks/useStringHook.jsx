import { useState } from 'react'


const useStringHook = () => {
    const [stringHookState, setstringHookState] = useState('This is string');
    const someWords = "Hello World"

    //custom hooks for function involving state

    const doubleString = () => {
        setstringHookState(stringHookState + stringHookState);
    }

    const reverseString = () => {
        setstringHookState(stringHookState.split('').reverse('').join(''));
    }

    return {
        stringHookState: stringHookState,
        helloWord: someWords,
        reverseString,
        doubleString,
        setstringHookState
    }
}

export default useStringHook