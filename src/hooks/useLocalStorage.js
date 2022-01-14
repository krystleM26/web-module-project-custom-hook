import React, {useState} from 'react'

const useLocalStorage = (initialValue, key) => {
    const [localStorage, setLocalStorage] = useState(initialValue);
    return [localStorage, setLocalStorage];
}

export default useLocalStorage;