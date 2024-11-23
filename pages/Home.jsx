import chefe from "../public/chefe.png";
import massas from "../public/massas.png";
import Categ from "../components/Categ";
import "../src/index.css";

export default function Home() {
  return (
    <div className="container xl flex flex-col gap-10">
      <div className="flex justify-center gap-10">
        <img className="w-100 h-100" src={chefe} alt="" />

        <div className="flex-row w-2/4 ">
          <p className="text-2xl leading-7 text-white font-serif text-justify indent-8">
            <span className="text-8xl leading-7 tracking-tighter">C</span>hef
            Gustavo Moretti é um renomado cozinheiro com raízes na Itália e no
            Brasil. Crescido em uma pequena cidade costeira na Toscana, ele foi
            exposto desde cedo à culinária simples e autêntica de sua avó, que
            usava ingredientes frescos colhidos na fazenda da família.
          </p>

          <p className="text-2xl leading-7 text-white font-serif text-justify py-5 indent-8">
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
        <div className="flex gap-9 flex-wrap">
          <Categ imagem={massas} name={"Massas"} />
          <Categ imagem={massas} name={"Lasanha"} />
        </div>
      </div>
    </div>
  );
}
