import {SubmitEventHandler, useEffect, useState} from "react";
// import PropTypes from "prop-types"; //seems deprecated

type CategoryProps = {
    onNewCategory: (category: string) => void;
};

// type SubmitProps = {
//     submitEvent: (event: SubmitEventHandler<HTMLFormElement>) => void;
// };

// export const AddCategory =( {setCategories, onNewCategory}) =>{
export const GifSearchBar = ({onNewCategory}: CategoryProps) => {

    const [inputValue, setInputValue] = useState('');

    // const triggerChange= ()=>{

    // }

    const handleOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setInputValue(event.target.value)
    }

    useEffect( ()=> {
        // console.log('Message mounted');
        const timeoutToResolve=  setTimeout(() => {
            console.log('inputValue in useEffect hook: ' +inputValue);
            if (inputValue.trim().length <= 1) return;

            onNewCategory(inputValue.trim());
            setInputValue('');
        }, 700);

        return () => {
            clearTimeout(timeoutToResolve);

        }

    }, [handleOnChange]);

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

//seems deprecated
// GifSearchBar.propTypes = {
//     onNewCategory: PropTypes.func.isRequired,
// }