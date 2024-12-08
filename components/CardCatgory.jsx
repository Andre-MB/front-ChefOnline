import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function CardCatgory({
  id,
  catgory,
  name,
  desc,
  dificult,
  pigs,
  time,
}) {
  const renderContent = () => {
    switch (dificult) {
      case "fácil":
        return (
          <>
            <img src="../public/black-star-silhouette-verde.png" alt="" />
            <img src="../public/black-star-silhouette-cinza.png" alt="" />
            <img src="../public/black-star-silhouette-cinza.png" alt="" />
          </>
        );
      case "médio":
        return (
          <>
            <img src="../public/black-star-silhouette-verde.png" alt="" />
            <img src="../public/black-star-silhouette-verde.png" alt="" />
            <img src="../public/black-star-silhouette-cinza.png" alt="" />
          </>
        );
      case "difícil":
        return (
          <>
            <img src="../public/black-star-silhouette-verde.png" alt="" />
            <img src="../public/black-star-silhouette-verde.png" alt="" />
            <img src="../public/black-star-silhouette-verde.png" alt="" />
          </>
        );
    }

    //       import React from 'react';

    // const StarRating = ({ difficult }) => {
    //   const starPaths = {
    //     green: "../public/black-star-silhouette-verde.png",
    //     gray: "../public/black-star-silhouette-cinza.png",
    //   };

    //   const difficulties = {
    //     fácil: [starPaths.green, starPaths.gray, starPaths.gray],
    //     médio: [starPaths.green, starPaths.green, starPaths.gray],
    //     difícil: [starPaths.green, starPaths.green, starPaths.green],
    //   };

    //   const renderStars = () =>
    //     (difficult in difficulties ? difficulties[difficult] : []).map((src, index) => (
    //       <img key={index} src={src} alt="Star" />
    //     ));

    //   return <div>{renderStars()}</div>;
    // };

    // export default StarRating;
  };

  return (
    <div>
      <Link to={`/revenue/${catgory}/${id}`}>
        <div className="flex p-2 bg-slate-100 bg-opacity-20 w-full rounded-lg group hover:bg-slate-300 ">
          <img
            className="imagemDoCard rounded-lg"
            src="../public/image.png"
            alt=""
          />

          <div className="flex flex-col w-3/4 p-3 ">
            <h1 className="text-xl text-green-500 font-bold group-hover:text-green-800">
              {name}
            </h1>
            <p className="text-justify indent-8 pt-2 group-hover:text-gray-700">
              {desc}
            </p>
          </div>

          <div className="flex flex-col gap-3 items-center">
            <div className="flex flex-col w-max">
              <div className="flex">{renderContent()}</div>
              <h1 className="group-hover:text-green-600">Dificuldade</h1>
            </div>

            <div className="flex flex-col items-start w-max">
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <img src="../public/prato.png" alt="" width={30} />
                  <h1 className="group-hover:text-gray-700">{pigs}</h1>
                </div>
                <h1 className="group-hover:text-green-600">Porções</h1>
              </div>
            </div>

            <div className="flex flex-col items-start w-max">
              <div className="flex flex-col items-center">
                <div className="flex gap-2">
                  <img src="../public/despertador2.png" width={30} alt="" />
                  <h1 className="group-hover:text-gray-700">{time}</h1>
                </div>
                <h1 className="group-hover:text-green-600">Tempo</h1>
              </div>
            </div>
          </div>

          {/*  */}
        </div>
      </Link>
    </div>
  );
}

CardCatgory.propTypes = {
  name: PropTypes.string.isRequired, // `name` deve ser uma string e obrigatória
  desc: PropTypes.string.isRequired,
  dificult: PropTypes.string.isRequired,
  pigs: PropTypes.string.isRequired, // isso
  time: PropTypes.string.isRequired, // resolver isso aqui depois
  catgory: PropTypes.string.isRequired, // resolver isso aqui depois
  id: PropTypes.string.isRequired, // resolver isso aqui depois
};
