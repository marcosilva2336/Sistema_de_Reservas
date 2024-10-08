import Header from "./components/Header/Header";
import Filtro from "./components/Filtro/Filtro"; 
import Destaques from "./components/Destaques/Destaques";
import Eventos from "./components/Eventos/Eventos";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <div>
      <Header />
      <Filtro /> 
      <Destaques />
      <Eventos />
      <Footer />
    </div>
  );
}