import { useEffect, useState } from "react";
import { getGifs } from '../helpers/getGifs';


export const useFetchGifs = ( category) => {
  
  const [images, setImages] = useState([]);

  useEffect(() => {
    getGifs(category).then((newImages) => setImages(newImages));
  }, []);

  
    return {
        images,
        isLoading: true
    }
}
