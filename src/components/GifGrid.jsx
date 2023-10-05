import {useFetchGifs} from "../hooks/useFetchGifs";
import {GifItem} from "./GifItem";

export const GifGrid = ({category}) => {
  const {images, loading} = useFetchGifs(category);
  return (
    <div>
      <h3>{category}</h3>
      {loading && <h2>Cargando...</h2>}
      {images?.map((img) => (
        <GifItem key={img.id} {...img} />
      ))}
    </div>
  );
};
