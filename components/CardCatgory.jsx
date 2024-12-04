import PropTypes from "prop-types";

export default function CardCatgory({ name, desc, dificult, pigs, time }) {
  return (
    <div>
      <div className="flex p-2 bg-slate-100 bg-opacity-20 w-full rounded-lg ">
        <img
          className="imagemDoCard rounded-lg"
          src="../public/image.png"
          alt=""
        />

        <div className="flex flex-col w-3/4 p-3 ">
          <h1 className="text-xl text-green-500 font-bold">{name}</h1>
          <p className="text-justify indent-8 pt-2">{desc}</p>
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
              <div className="flex gap-2">
                <img src="../public/prato.png" alt="" width={30} />
                <h1>{pigs}</h1>
              </div>
              <h1>Porções</h1>
            </div>
          </div>

          <div className="flex flex-col items-start w-max">
            <div className="flex flex-col items-center">
              <div className="flex gap-2">
                <img src="../public/despertador2.png" width={30} alt="" />
                <h1>{time}</h1>
              </div>
              <h1>Tempo</h1>
            </div>
          </div>
        </div>

        {/*  */}
      </div>
    </div>
  );
}

CardCatgory.propTypes = {
  name: PropTypes.string.isRequired, // `name` deve ser uma string e obrigatória
  desc: PropTypes.string.isRequired,
  dificult: PropTypes.string.isRequired,
  pigs: PropTypes.string.isRequired, // isso
  time: PropTypes.string.isRequired, // resolver isso aqui depois
};
