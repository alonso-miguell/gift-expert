import { useEffect, useState } from "react";
import { fetchGifs } from "../helpers/api";

/*
A custom hooks is nothing more than a function
Instead of returning a componenet, it returns an object

return () for componenet
return {} for hook
*/
export const useFetchGifs =(category) =>{

    const[gifts,setGifts]=useState([]);
    const[isLoading, setIsLoading]=useState(true);

    const getGifts=async() =>{
        setGifts(await fetchGifs(category) );
        setIsLoading(false);
    }

    useEffect( ()=>{
        getGifts(); 
    },
    [] );

    /* Since isLoading is calles the same in the hook we can omit the 
    
    value:object syntaxis
    
    return {
        images: gifts,
        isLoading
    };
    */
    return {
        gifts: gifts,
        isLoading: isLoading
    };


}