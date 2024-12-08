import { useParams } from "react-router-dom";
import doces from "../public/image.png";
import { useState } from "react";

export default function Revenue() {
  const { category, id } = useParams();

  const [name] = useState("Pudim Simplão");

  return (
    <div className="w-3/4 h-3/4">
      <div className="flex justify-around bg-slate-100 bg-opacity-20 h-full rounded-lg">
        <div className="flex-col p-4">
          <img className="imageCard rounded-2xl" src={doces} alt="" />
          <h1>{name}</h1>
        </div>
        <div className="flex w-1/3">
          <h1>Lista Ingredientes</h1>
        </div>
        <div className="flex w-1/3">
          <h1>Modo de Preparo</h1>
        </div>
      </div>
    </div>
  );
}
