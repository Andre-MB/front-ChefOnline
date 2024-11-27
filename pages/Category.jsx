import { useParams } from "react-router-dom";

export default function Category() {
  const { name } = useParams();

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

        <div className=" text-white flex border-t border-white w-full mt-10">
          <div className="flex p-5 w-full bg-slate-100 bg-opacity-20 rounded-lg m-3">
            <img
              className="rounded-lg"
              width="200px"
              height="200px"
              src="../public/image.png"
              alt=""
            />

            <div className="flex flex-col w-2/4 p-3 ">
              <h1 className="text-xl text-green-500 font-bold">
                Pudim simplão
              </h1>
              <p className="text-justify indent-8 pt-2">
                Receita de Pudim de Leite Condensado da Mamãezinha, tradicional
                e delicioso, feito com Leite MOÇA, Leite Líquido NINHO Forti+
                Integral, ovos e calda de caramelo.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
