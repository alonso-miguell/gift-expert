import {Gif, GiphyRandomResponse} from "../data/giphy.response";
import {GifElement} from "../data/Interfaces";


export const fetchGifs = async (category: string) => {
    const apiKey = 'dLKT8mKiP2xYk5hQt2JB2x9m7zFB0nq5';
    const resp = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${category}&limit=7`);

    const {data} = await resp.json();

    const gifs: GifElement[] = data.map((element: Gif) => (
        {
            id: element.id,
            title: element.title,
            url: element.images.fixed_height.url,
            width: element.images.fixed_height.width,
            height: element.images.fixed_height.height,
        }
    ));

    return gifs;
}