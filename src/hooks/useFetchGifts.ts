import { useEffect, useState } from "react";
import {fetchGifs} from "../helpers/api";
import {GifElement} from "../data/Interfaces";

import {GiphyRandomResponse} from "../data/giphy.response";
import {fetchGifsWithAxios} from "../helpers/axiosApi";

/*
A custom hooks is nothing more than a function
Instead of returning a componenet, it returns an object

return () for componenet
return {} for hook
*/

/*
* useState: Store and update internal state, something like vars in memory;
                runs On render + when updated
* useEffect: Runs whan data changes (side effects like API calls, timers);
                Runs after render + when data/dependecies change
*/

export const useFetchGifs =(category: string) =>{

    const[gifts,setGifts]=useState<GifElement[]>([]);
    const[isLoading, setIsLoading]=useState(true);

    const getGifts=async() =>{
        // setGifts(await fetchGifs(category) );
        // await fetchGifsWithAxios(category);
        setGifts(await fetchGifsWithAxios(category));
        setIsLoading(false);
    }

    useEffect( ()=>{
        getGifts(); 
    },
    [] );

    /* Since isLoading is calles the same in the hook we can omit the 
    
    value:object syntaxis
    */

    return {
        gifts: gifts,
        isLoading: isLoading
    };


}