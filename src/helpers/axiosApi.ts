import {Gif, GiphyRandomResponse} from "../data/giphy.response";
import axios from "axios";
import {GifElement} from "../data/Interfaces";

export const fetchGifsWithAxios = async (category: string): Promise<GifElement[]> => {
    const apiKey = 'dLKT8mKiP2xYk5hQt2JB2x9m7zFB0nq5';
    const url = 'http://api.giphy.com/v1/gifs/search';
    const query = category;
    const limit = 7;
    const resp = await axios.get(url, {
        params: {
            api_key: apiKey,
            q: query,
            limit: limit,
        }
    });

    const data: GiphyRandomResponse = resp.data;

    console.log("using AXIOS");
    console.log(data);

    return transformGif(resp.data);
};


const transformGif = (response: GiphyRandomResponse) => {
    const gifs: GifElement[] = response.data.map((element: Gif) => (
        {
            id: element.id,
            title: element.title,
            url: element.images.fixed_height.url,
            width: Number(element.images.fixed_height.width),
            height: Number(element.images.fixed_height.height),
        }
    ));

    return gifs;
};