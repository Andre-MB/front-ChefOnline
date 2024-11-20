import "./App.css";
import chefe from "../public/chefe.png";
import massas from "../public/massas.png";

function App() {
  return (
    <div className="container xl flex flex-col gap-10">
      <div className="flex justify-center gap-10">
        <img className="w-100 h-100" src={chefe} alt="" />

        <div className="flex-row w-2/4 ">
          <p className="text-2xl text-white font-serif text-justify indent-8">
            <span className="text-8xl">C</span>hef Gustavo Moretti é um renomado
            cozinheiro com raízes na Itália e no Brasil. Crescido em uma pequena
            cidade costeira na Toscana, ele foi exposto desde cedo à culinária
            simples e autêntica de sua avó, que usava ingredientes frescos
            colhidos na fazenda da família.
          </p>

          <p className="text-2xl text-white font-serif text-justify py-5 indent-8">
            Agora, ele decidiu compartilhar seu conhecimento e experiência com o
            mundo através de receitas que traduzem seu amor pela culinária. Em
            cada prato, ele busca trazer histórias de sua jornada, sempre focado
            em técnicas acessíveis e sabores que abraçam tanto o simples quanto
            o sofisticado.
          </p>
        </div>
      </div>

      <div className="flex flex-col gap-5 xl px-28 ">
        <h1 className="text-white font-serif text-4xl">Categorias</h1>
        <div>
          <div>
            <img src={massas} alt="" />
            <h1 className="titulo text-white text-2xl relative z-10 ">
              Massas
            </h1>
            <div className="sombra relative z-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
