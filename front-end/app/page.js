import Header from "./components/Header/Header";
import Filtro from "./components/Filtro/Filtro"; 
import Eventos from "./components/Eventos/Eventos";

export default function Home() {
  return (
    <div>
      <Header />
      <Filtro /> 
      <Eventos />
    </div>
  );
}