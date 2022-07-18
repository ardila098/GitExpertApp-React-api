

//hacer lapeticion para traer los gifs
export const getGifs = async (category) => {

    const url = `https://api.giphy.com/v1/gifs/search?api_key=ugrbjYjbXXmLFjFLUYKjQefAvcnNm9Lu&q=${category}&limit=10`;
    const resp = await fetch(url);
    const { data } = await resp.json(); //convierto la respuesta en un archivo json y la guardo en data


    
    const gifs = data.map(img => ({

        id: img.id,
        title: img.title,
        url:img.images.downsized_medium.url

}) )


    return gifs;
    
}