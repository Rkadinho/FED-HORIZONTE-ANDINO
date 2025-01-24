import home from "../assets/home.jpeg"
import '../css/pages/home.css';

function Home() {
  return (
    <>
      <div className="home">
        <div>
          <img src={home} className="homeImg"></img>
        </div>
        <div className="text">
          <h2 className="text-primary">
            Aqui no Horizonte Andino, 
            transformamos suas viagens em experiências inesquecíveis.
            Das paisagens deslumbrantes do Deserto do Atacama aos picos nevados da Cordilheira dos Andes,
            passando pelos vinhedos do Vale do Colchagua e as praias encantadoras de Valparaíso, 
            cada destino conta uma história única.
          </h2>
        </div>
      </div>
    </>
  )
}

export default Home;