import { useState } from 'react'

const useInput = (id,placeholder) => {
    const [value, setValue] = useState('')

    const onChangeHandler = (e) => {
        setValue(e.target.value)
    }
    return { 
        id: id,
        name: id,
        value: value, 
        onChange: onChangeHandler,
        placeholder: 'Enter your ' + placeholder
    }
}

export default useInput