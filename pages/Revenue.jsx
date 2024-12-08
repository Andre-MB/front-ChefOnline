import { useParams } from "react-router-dom";
import doces from "../public/image.png";
import despertador from "../public/despertador2.png";
import prato from "../public/prato.png";
import estrelaVerde from "../public/black-star-silhouette-verde.png";
import estrelaCinza from "../public/black-star-silhouette-cinza.png";
import { useState } from "react";

export default function Revenue() {
  const { category, id } = useParams();

  const [name] = useState("Pudim Simplão");
  const [dificult] = useState("fácil");
  const [pigs] = useState("10");
  const [time] = useState("100 min");

  const renderContent = () => {
    switch (dificult) {
      case "fácil":
        return (
          <>
            <img src={estrelaVerde} alt="" />
            <img src={estrelaCinza} alt="" />
            <img src={estrelaCinza} alt="" />
          </>
        );
      case "médio":
        return (
          <>
            <img src={estrelaVerde} alt="" />
            <img src={estrelaVerde} alt="" />
            <img src={estrelaCinza} alt="" />
          </>
        );
      case "difícil":
        return (
          <>
            <img src={estrelaVerde} alt="" />
            <img src={estrelaVerde} alt="" />
            <img src={estrelaVerde} alt="" />
          </>
        );
    }
  };

  return (
    <div className="w-3/4 h-3/4">
      <div className="flex justify-around bg-slate-100 bg-opacity-20 h-full rounded-lg">
        <div className="flex-col p-4">
          <img className="imageCard rounded-2xl" src={doces} alt="" />

          <h1 className="text-2xl text-center text-green-500 pt-4">{name}</h1>

          <div className="flex flex-col gap-5 pt-2 items-center">
            <div className="flex flex-col w-max">
              <div className="flex">{renderContent()}</div>
              <h1 className="group-hover:text-green-600">Dificuldade</h1>
            </div>

            <div className="flex flex-col items-start w-max">
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <img src={prato} alt="" width={30} />
                  <h1 className="group-hover:text-gray-700">{pigs}</h1>
                </div>
                <h1 className="group-hover:text-green-600">Porções</h1>
              </div>
            </div>

            <div className="flex flex-col items-start w-max">
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <img src={despertador} width={30} alt="" />
                  <h1 className="group-hover:text-gray-700">{time}</h1>
                </div>
                <h1 className="group-hover:text-green-600">Tempo</h1>
              </div>
            </div>
          </div>

          {/*  */}
        </div>

        <div className="two-columns p-4">
          <h1 className="text-2xl">Lista de Ingredientes </h1>
          <p className="pt-2 indent-8">
            Calda: 5 colheres (sopa) de açúcar refinado, 10 colheres (sopa) de
            água. Pudim: 1 Leite MOÇA® (lata ou caixinha) 395g, 390ml de Leite
            Líquido NINHO® Forti+ Integral, 5 ovos.
          </p>
          <h1 className="text-2xl pt-4">Modo de PreparoCalda </h1>
          <p className="pt-2 indent-8">
            1. Em uma panela de fundo largo, derreta o açúcar até ficar dourado.
            Junte a água quente e mexa com uma colher de cabo longo, com cuidado
            para não espirrar. Deixe ferver até dissolver os torrões de açúcar e
            a calda engrossar. Em seguida, utilize o caramelo pronto para
            despejar no fundo de uma forma de furo central (20cm de diâmetro),
            forrando-a por completo. Deixe reservado até que esfrie por
            completo. Pudim
          </p>
          <p className="indent-8">
            2. Em um liquidificador, bata o Leite MOÇA, o Leite e os ovos muito
            bem e despeje na forma reservada com o Caramelo já frio.
          </p>
          <p className="indent-8">
            3. Cubra a forma com papel-alumínio do lado brilhante para dentro,
            coloque-a em uma forma retangular, adicione água quente até a metade
            e leve para assar em forno médio (180ºC), preaquecido, por cerca de
            1 hora e meia, ou até que firme.
          </p>
          <p className="indent-8">
            4. Após esse tempo, retire do forno com cuidado e deixe esfriar por
            completo antes de levar à geladeira por no mínimo 6 horas para só
            então desenformar e servir.
          </p>
        </div>
      </div>
    </div>
  );
}
