import {useEffect, useState} from "react";

export const useGif = () => {

    const [currentValue, setCurrentValue] = useState('');

    const [categories, setCategories] =
        useState<string[]>(['Final Fantasy', 'Dragon quest']);

    // const addCategory = (newCategory: string) => {
    // };

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCurrentValue(event.target.value)
    }

    useEffect(() => {
        // console.log('Message mounted');
        const timeoutToResolve = setTimeout(() => {
            console.log('inputValue in useEffect hook: ' + currentValue);
            if (currentValue.trim().length <= 1) return;

            const newCategory = currentValue.toLowerCase();

            if (categories.includes(newCategory)) return;



            setCategories([newCategory, ...categories].slice(0,6));


            // newCategory(currentValue.trim());
            setCurrentValue('');
        }, 700);

        return () => {
            clearTimeout(timeoutToResolve);
        }

    }, [handleOnChange]);

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log('submitted');

        //Can share both, the state or the function
        //setCategories( (category)=> [  ...category, inputValue]);
        if (currentValue.trim().length <= 1) return;

        // onNewCategory(currentValue.trim());
        //
        // setCurrentValue('');

        const newCategory = (currentValue).toLowerCase();
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
        setCurrentValue(newCategory);
        setCurrentValue('');
    }

    return {
        categories,
        currentValue,
        handleOnChange,
        handleOnSubmit,
    }

}