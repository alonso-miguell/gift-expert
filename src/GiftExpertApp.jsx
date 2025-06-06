import {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GiftGrid} from "./components/GiftGrid";

export const GiftExpertApp = () => {

    const [categories, setCategories] =
        useState(['Final Fantasy', 'Dragon quest']);

    const addCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (<>
        <h1> GiftExpertApp</h1>

        <AddCategory setCategories={setCategories} onNewCategory={addCategory}></AddCategory>

        <div className="card-grid">
            {
                categories.map((category) => {
                    return <GiftGrid key={category} category={category}></GiftGrid>
                })

            }
        </div>

    </>);

};