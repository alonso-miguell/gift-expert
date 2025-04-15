import { useEffect, useState } from "react";
import { fetchGifs } from '../helpers/api'
import { GiftItem } from "./GiftItem";
import { useFetchGifs } from "../customHooks/useFetchGifts";

export const GiftGrid = ({category}) =>{

    /*
    const[gifts,setGifts]=useState([]);

    const getGifts=async() =>{
        setGifts(await fetchGifs(category) );
    }

    useEffect( ()=>{
        getGifts(); 
        console.log(gifts);    
    },
    [] );
*/

    //Calling custom hook
    const { gifts, isLoading } = useFetchGifs(category);


    return (
        <div>
            {
                isLoading ? (<h1> CARGANDO....</h1>) :

                (<>
                <h3> {category} </h3>
                <div className="card-grid">
                    {
                        gifts.map((element) => 
                            ( <GiftItem key={element.id} {...element} />))

                    }
                </div>
                </>
                )
            }
        </div>
    );

};