export const fetchGifs= async (category) => {
    const apiKey = 'dLKT8mKiP2xYk5hQt2JB2x9m7zFB0nq5';
    const resp   = await fetch(`http://api.giphy.com/v1/gifs/search?api_key=${ apiKey }&q=${category}&limit=5`);

    const { data } = await resp.json(); 

    const gifs= data.map( (element) => (
    {
        id: element.id,
        title: element.title,
        url: element.images.downsized_medium.url,
    }
    ));

    return gifs;
} 