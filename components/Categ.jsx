import PropTypes from "prop-types";

export default function Categ({ imagem, name }) {
  return (
    <div>
      <img className="imageCard" src={imagem} alt="" />
      <h1 className="titulo text-white text-2xl relative z-10 ">{name}</h1>
      <div className="sombra relative z-1"></div>
    </div>
  );
}

Categ.propTypes = {
  imagem: PropTypes.string.isRequired, // `imagem` deve ser uma string e obrigatória
  name: PropTypes.string.isRequired, // `name` deve ser uma string e obrigatória
};
