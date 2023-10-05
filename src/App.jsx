import {useState} from "react";
import {BarraBusqueda, GifGrid} from "./components";

function App() {
  const [categories, setCategories] = useState([]);

  const newCategory = (categorytyped) => {
    if (categories.includes(categorytyped)) return;
    setCategories([...categories, categorytyped]);
  };

  return (
    <>
      <h1>Gifs App</h1>
      <h5>By Byakko15</h5>
      <BarraBusqueda newCategory={newCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
}

export default App;
