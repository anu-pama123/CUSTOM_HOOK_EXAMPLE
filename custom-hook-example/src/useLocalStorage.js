import { useEffect, useState } from "react";

const getSavedValue = (key, initialValue) => {
    let savedValue = localStorage.getItem(key);
    savedValue = JSON.parse(savedValue);

    if (savedValue) return savedValue

    return initialValue
}

const useLocalStorage = (key, initialValue) => {
    
    const [value, setValue] = useState( () => {
        return getSavedValue(key, initialValue)
    });

    useEffect(() => {
        localStorage.setItem(key, JSON.stringify(value))
    },[value,key])
    
    return [value, setValue];
}

export default useLocalStorage;