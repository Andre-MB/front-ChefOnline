import { useParams } from "react-router-dom";
import CardCatgory from "../components/CardCatgory";
import { useState } from "react";

export default function Category() {
  const { name } = useParams();

  const [id] = useState("1");
  const [nameRevenue] = useState("Pudim simplão");
  const [desc] = useState(
    "Receita de Pudim de Leite Condensado da Mamãezinha, tradicional e delicioso, feito com Leite MOÇA, Leite Líquido NINHO Forti+ Integral, ovos e calda de caramelo."
  );

  return (
    <>
      <div className="container flex flex-col items-center">
        <h1 className="text-8xl text-white font-serif tracking-tighter">
          {name}
        </h1>

        <div className="container flex flex-col items-center w-full">
          <input
            className="p-1 pl-2 rounded-full bg-slate-700 outline-none text-white placeholder-slate-50 w-2/3"
            type="text"
            name="search"
            id=""
            placeholder="Pesquise por um prato"
          />
          <img
            name="search"
            className="search relative  -m-7  max-lg:mr-5"
            src="../public/airport-searchor.png"
            alt=""
          />
        </div>

        <div className="grid grid-cols-2 text-white border-t border-white mt-10 gap-3 pt-2">
          <CardCatgory
            id={id}
            catgory={name}
            name={nameRevenue}
            desc={desc}
            dificult={"fácil"}
            pigs={"10"}
            time={"110 min"}
          />
        </div>
      </div>
    </>
  );
}
