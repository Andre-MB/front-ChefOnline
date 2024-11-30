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

        <div className="grid grid-cols-2 text-white border-t border-white mt-10 gap-3 pt-2">
          <div className="flex p-2 bg-slate-100 bg-opacity-20 w-full rounded-lg ">
            <img
              className="imagemDoCard rounded-lg"
              src="../public/image.png"
              alt=""
            />

            <div className="flex flex-col w-3/4 p-3 ">
              <h1 className="text-xl text-green-500 font-bold">
                Pudim simplão
              </h1>
              <p className="text-justify indent-8 pt-2">
                Receita de Pudim de Leite Condensado da Mamãezinha, tradicional
                e delicioso, feito com Leite MOÇA, Leite Líquido NINHO Forti+
                Integral, ovos e calda de caramelo.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col w-max">
                <div className="flex">
                  <img src="../public/black-star-silhouette-verde.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                </div>
                <h1>Dificuldade</h1>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/prato.png" alt="" width={30} />
                  <h1>Porções</h1>
                </div>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/despertador2.png" width={30} alt="" />
                  <h1>Tempo</h1>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
          <div className="flex p-2 bg-slate-100 bg-opacity-20 w-full rounded-lg ">
            <img
              className="imagemDoCard rounded-lg"
              src="../public/image.png"
              alt=""
            />

            <div className="flex flex-col w-3/4 p-3 ">
              <h1 className="text-xl text-green-500 font-bold">
                Pudim simplão
              </h1>
              <p className="text-justify indent-8 pt-2">
                Receita de Pudim de Leite Condensado da Mamãezinha, tradicional
                e delicioso, feito com Leite MOÇA, Leite Líquido NINHO Forti+
                Integral, ovos e calda de caramelo.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col w-max">
                <div className="flex">
                  <img src="../public/black-star-silhouette-verde.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                </div>
                <h1>Dificuldade</h1>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/prato.png" alt="" width={30} />
                  <h1>Porções</h1>
                </div>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/despertador2.png" width={30} alt="" />
                  <h1>Tempo</h1>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
          <div className="flex p-2 bg-slate-100 bg-opacity-20 w-full rounded-lg ">
            <img
              className="imagemDoCard rounded-lg"
              src="../public/image.png"
              alt=""
            />

            <div className="flex flex-col w-3/4 p-3 ">
              <h1 className="text-xl text-green-500 font-bold">
                Pudim simplão
              </h1>
              <p className="text-justify indent-8 pt-2">
                Receita de Pudim de Leite Condensado da Mamãezinha, tradicional
                e delicioso, feito com Leite MOÇA, Leite Líquido NINHO Forti+
                Integral, ovos e calda de caramelo.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col w-max">
                <div className="flex">
                  <img src="../public/black-star-silhouette-verde.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                </div>
                <h1>Dificuldade</h1>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/prato.png" alt="" width={30} />
                  <h1>Porções</h1>
                </div>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/despertador2.png" width={30} alt="" />
                  <h1>Tempo</h1>
                </div>
              </div>
            </div>

            {/*  */}
          </div>{" "}
          <div className="flex p-2 bg-slate-100 bg-opacity-20 w-full rounded-lg ">
            <img
              className="imagemDoCard rounded-lg"
              src="../public/image.png"
              alt=""
            />

            <div className="flex flex-col w-3/4 p-3 ">
              <h1 className="text-xl text-green-500 font-bold">
                Pudim simplão
              </h1>
              <p className="text-justify indent-8 pt-2">
                Receita de Pudim de Leite Condensado da Mamãezinha, tradicional
                e delicioso, feito com Leite MOÇA, Leite Líquido NINHO Forti+
                Integral, ovos e calda de caramelo.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col w-max">
                <div className="flex">
                  <img src="../public/black-star-silhouette-verde.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                </div>
                <h1>Dificuldade</h1>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/prato.png" alt="" width={30} />
                  <h1>Porções</h1>
                </div>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/despertador2.png" width={30} alt="" />
                  <h1>Tempo</h1>
                </div>
              </div>
            </div>

            {/*  */}
          </div>{" "}
          <div className="flex p-2 bg-slate-100 bg-opacity-20 w-full rounded-lg ">
            <img
              className="imagemDoCard rounded-lg"
              src="../public/image.png"
              alt=""
            />

            <div className="flex flex-col w-3/4 p-3 ">
              <h1 className="text-xl text-green-500 font-bold">
                Pudim simplão
              </h1>
              <p className="text-justify indent-8 pt-2">
                Receita de Pudim de Leite Condensado da Mamãezinha, tradicional
                e delicioso, feito com Leite MOÇA, Leite Líquido NINHO Forti+
                Integral, ovos e calda de caramelo.
              </p>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <div className="flex flex-col w-max">
                <div className="flex">
                  <img src="../public/black-star-silhouette-verde.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                  <img src="../public/black-star-silhouette-cinza.png" alt="" />
                </div>
                <h1>Dificuldade</h1>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/prato.png" alt="" width={30} />
                  <h1>Porções</h1>
                </div>
              </div>

              <div className="flex flex-col items-start w-max">
                <div className="flex flex-col items-center">
                  <img src="../public/despertador2.png" width={30} alt="" />
                  <h1>Tempo</h1>
                </div>
              </div>
            </div>

            {/*  */}
          </div>
        </div>
      </div>
    </>
  );
}
