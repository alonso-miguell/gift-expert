import { useState } from "react";
import PropTypes from "prop-types";

export const AddCategory =( {setCategories, onNewCategory}) =>{

    const [inputValue, setInputValue]=useState('');

    const handleOnChange=(event) => {
        console.log('value is: '+event.target.value);
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
    <form onSubmit={ handleOnSubmit } data-testid="category-form">
        <input
        type="text"
        placeholder="Search a gift" 
        value={inputValue}
        onChange={handleOnChange}        
        />
    </form>
    );
}

AddCategory.propTypes = {
    onNewCategory: PropTypes.func.isRequired,
}