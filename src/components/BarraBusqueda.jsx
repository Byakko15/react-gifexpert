import {useState} from "react";

export const BarraBusqueda = ({newCategory}) => {
  const [input, setInput] = useState("");

  const handleChange = (event) => {
    setInput(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (input.trim().length <= 1) return;
    newCategory(input.trim());
    setInput("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Digite el tema del Gif"
        value={input}
        onChange={handleChange}
      />
    </form>
  );
};
