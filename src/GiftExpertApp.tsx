import {useState} from "react";
import {AddCategory} from "./components/AddCategory";
import {GiftGrid} from "./components/GiftGrid";
import {GiftSearches} from "./components/GiftSearches";


export const GiftExpertApp = () => {

    const [categories, setCategories] =
        useState<string[]>(['Final Fantasy', 'Dragon quest']);

    const addCategory = (newCategory: string) => {
        if (categories.includes(newCategory)) return;

        setCategories([newCategory, ...categories]);
    };

    return (<>
        {/*<link rel="preconnect" href="https://fonts.googleapis.com"/>*/}
        {/*<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin/>*/}
        {/*<link*/}
        {/*    href="https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"*/}
        {/*    rel="stylesheet"/>*/}
        <h1> GiftExpertApp</h1>

        {/*<AddCategory setCategories={setCategories} onNewCategory={addCategory}></AddCategory>*/}
        <AddCategory onNewCategory={addCategory}></AddCategory>
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