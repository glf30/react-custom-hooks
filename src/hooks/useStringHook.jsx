import { useState } from 'react'


const useStringHook = () => {
    const [stringHookState, setstringHookState] = useState('This is string');
    const someWords = "Hello World"


    const reverseString = () => {
        setstringHookState(stringHookState.split('').reverse('').join(''));
    }

    return {
        stringHookState: stringHookState,
        helloWord: someWords,
        reverseString
    }
}

export default useStringHook