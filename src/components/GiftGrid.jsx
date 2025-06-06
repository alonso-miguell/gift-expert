import {useEffect, useState} from "react";
import {fetchGifs} from '../helpers/api'
import {GiftItem} from "./GiftItem";
import {useFetchGifs} from "../hooks/useFetchGifts";
import PropTypes from "prop-types";

export const GiftGrid = ({category}) => {

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
    const {gifts, isLoading} = useFetchGifs(category);


    return (
        <div>
            <>
                <h3> {category} </h3>
                {
                    isLoading && (<h1> LOADING....</h1>)
                }

                <div className="card-grid">
                    {
                        gifts.map((element) =>
                            (<GiftItem key={element.id} {...element} />))
                    }
                </div>
            </>
        </div>
    );
};

GiftGrid.propTypes = {
    category: PropTypes.string.isRequired,
}
