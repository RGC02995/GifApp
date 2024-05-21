import { useEffect, useState } from "react";
import { getGifs } from "../helpers/getGifs";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";

export const GifGrid = ({ category, api_key }) => {
  const { images, isLoading } = useFetchGifs({ category, api_key });
  return (
    <>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <>
          <h3>{category}</h3>
          <div className="card-grid">
            {images.map((img) => (
              <GifItem key={img.id} {...img} />
            ))}
          </div>
        </>
      )}
    </>
  );
};
