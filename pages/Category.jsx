import { useParams } from "react-router-dom";

export default function Category() {
  const { name } = useParams();

  return (
    <>
      <h1 className="text-8xl text-white leading-7 tracking-tighter">{name}</h1>
    </>
  );
}
