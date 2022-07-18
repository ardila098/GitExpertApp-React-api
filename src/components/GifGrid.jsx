
import { useFetchGifs } from "../hooks/useFetchGifs";
import { GifItem } from "./GifItem";

//useEfect es para que el hook se dispare una vez cuando se use el componente cuando no tiene dependencias

export const GifGrid = ({ category }) => {

  //hook useFetch
  const { images, isLoading } = useFetchGifs(category)


    
    //traigo el GifItm , le pongo el key y uso {...image} para poder acceder a todas las propiedades de image
  return (
      <>
      <h3>{category}</h3>

      {/* {

        isLoading && ( <h2>Cargando..</h2>)
        
      } */}
 

      <div className="card-grid">
        {images.map(( image ) => (
          <GifItem key={image.id} {...image} />
        ))}
      </div>
    </>
  );
};
