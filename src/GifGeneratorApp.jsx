import React, { useState } from "react"; // snipet o shorthand es rafc enter
import { AddCategory, GifGrid } from "./components";

export const GifGeneratorApp = () => {
  const [categories, setCategories] = useState([]); // Usar useStade snippet para la estruc.

  const onAddCategory = (newCategory) => {
    if (categories.includes(newCategory)) return;
    setCategories([newCategory, ...categories]); // Para agregar elemento al array categories
  };

  return (
    <>
      <h1>Gif Generator App</h1>

      <AddCategory onNewCategory={onAddCategory} />

      {categories.map((category) => (
        <GifGrid key={category} category={category} />
      ))}
    </>
  );
};
