import { useState } from "react";

export const AddCategory =( {setCategories, onNewCategory}) =>{

    const [inputValue, setInputValue]=useState('');

    const handleOnChange=(event) => {
        console.log(event.target.value);
        setInputValue(event.target.value)
    }

    const handleOnSubmit=(event) =>{
        event.preventDefault();
        console.log(event);

        //Can share both, the state or the function 
        //setCategories( (category)=> [  ...category, inputValue]);
        if(inputValue.trim().length <=1 ) return;

        onNewCategory(inputValue.trim());

        setInputValue('');
    }



    return ( 
    <form onSubmit={ handleOnSubmit }>
        <input
        type="text"
        placeholder="Search a gift" 
        value={inputValue}
        onChange={handleOnChange}        
        />
    </form>
    );
}