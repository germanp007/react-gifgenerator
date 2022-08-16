import React from "react";
import { useFetchGif } from "../Hooks/useFetchGif";
import { GifItem } from "./GifItem";

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGif(category);
  return (
    <>
      <h3>{category}</h3>
      {isLoading ? <h2>Cargando...</h2> : null}
      <div className="card-grid">
        {images.map(({ title, url, id }) => (
          <GifItem key={id} title={title} url={url} />
        ))}
      </div>
    </>
  );
};
