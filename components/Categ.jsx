import PropTypes from "prop-types";
import { Link } from "react-router-dom";

export default function Categ({ imagem, name }) {
  const navegacao = () => {
    console.log("oi");
  };

  return (
    <>
      <Link to={`/category/${name}`}>
        <div onClick={navegacao}>
          <img className="imageCard rounded-2xl" src={imagem} alt="" />
          <h1 className="titulo text-white text-2xl relative z-10 ">{name}</h1>
          <div className="sombra relative z-1"></div>
        </div>
      </Link>
    </>
  );
}

Categ.propTypes = {
  imagem: PropTypes.string.isRequired, // `imagem` deve ser uma string e obrigatória
  name: PropTypes.string.isRequired, // `name` deve ser uma string e obrigatória
};
