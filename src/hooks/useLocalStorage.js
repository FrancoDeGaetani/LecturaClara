import { useState, useEffect } from 'react';

function useLocalLibrary(key) {
    const [list, setList] = useState([]);

    useEffect(() => {
        const stored = JSON.parse(localStorage.getItem(key)) || [];
        setList(stored);
    }, [key]);

    const addToList = (libro) => {
        const exists = list.find(l => l.id === libro.id);

        if (!exists) {
        const updated = [...list, libro];
        localStorage.setItem(key, JSON.stringify(updated));
        setList(updated);
        }
    };

    const removeFromList = (id) => {
        const updated = list.filter(l => l.id !== id);

        localStorage.setItem(key, JSON.stringify(updated));
        setList(updated);
    };

    return { list, addToList, removeFromList };
    }


export default useLocalLibrary;