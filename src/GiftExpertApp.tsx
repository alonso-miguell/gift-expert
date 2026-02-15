import {useState} from "react";
import {GifSearchBar} from "./components/GifSearchBar";
import {GiftGrid} from "./components/GiftGrid";
import {GiftSearches} from "./components/GiftSearches";
import {useGif} from "./hooks/useGif";


export const GiftExpertApp = () => {


    const  { categories, currentValue, handleOnChange, handleOnSubmit} = useGif();


    return (<>
        <h1> GiftExpertApp</h1>

        {/*<AddCategory setCategories={setCategories} onNewCategory={addCategory}></AddCategory>*/}
        <GifSearchBar inputValue={currentValue} handleOnSubmit={handleOnSubmit} handleOnChange={ handleOnChange}></GifSearchBar>
        <GiftSearches giftSearches={categories}></GiftSearches>

        <div className="card-grid">
            {
                categories.map((category) => {
                    return <GiftGrid key={category} category={category}></GiftGrid>
                })

            }
        </div>

    </>);

};