import {SubmitEventHandler, useEffect, useState} from "react";
import {GifHookProps} from "../data/Interfaces";
// import PropTypes from "prop-types"; //seems deprecated


// type SubmitProps = {
//     submitEvent: (event: SubmitEventHandler<HTMLFormElement>) => void;
// };

// export const AddCategory =( {setCategories, onNewCategory}) =>{
export const GifSearchBar = ({handleOnSubmit , inputValue, handleOnChange}: GifHookProps) => {



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