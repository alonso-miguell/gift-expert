import {SubmitEventHandler, useState} from "react";
import PropTypes from "prop-types";

type CategoryProps = {
    onNewCategory: (category: string) => void;
};

// type SubmitProps = {
//     submitEvent: (event: SubmitEventHandler<HTMLFormElement>) => void;
// };

// export const AddCategory =( {setCategories, onNewCategory}) =>{
export const AddCategory = ({onNewCategory}: CategoryProps) => {

    const [inputValue, setInputValue] = useState('');

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        // event.
        console.log('value is: ' + event.target.value);
        setInputValue(event.target.value)
    }

    const handleOnSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(event);

        //Can share both, the state or the function 
        //setCategories( (category)=> [  ...category, inputValue]);
        if (inputValue.trim().length <= 1) return;

        onNewCategory(inputValue.trim());

        setInputValue('');
    }


    return (
        <form onSubmit={handleOnSubmit} data-testid="category-form">
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