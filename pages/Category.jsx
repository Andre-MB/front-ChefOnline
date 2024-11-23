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
            className="p-1 rounded-full bg-slate-600 outline-none text-white placeholder-slate-50 w-2/3"
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
          dsfsdfsdf
        </div>
      </div>
    </>
  );
}
