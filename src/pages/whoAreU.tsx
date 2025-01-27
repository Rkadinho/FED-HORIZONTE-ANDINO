import whoAreU from "../assets/who.jpeg"
import "../css/pages/whoAreU.css"

function WhoAreU() {
  return(
    <div className="section bg-secondary d-flex center align-i-c">
      <img className="shadow img-who" src={whoAreU}></img>
      <div className="bg-tertiary text-primary shadow container-text">
        <div className="p-l-16 text-left p-t-72">
          <h3>QUEM SOMOS?</h3>
          <p>
            Somos um casal de brasileiros que encontrou no Chile um novo lar e a inspiração para criar a Horizonte Andino. 
            Morando aqui há alguns anos, 
            descobrimos cada canto encantador deste país e queremos compartilhar essas experiências com você.
          </p>
          <p>
            Nossa missão é oferecer roteiros personalizados, 
            guiados por quem conhece o Chile a fundo e entende as necessidades de cada viajante brasileiro. 
            Seja no Atacama, na Patagônia ou nos vinhedos chilenos, garantimos conforto, segurança e momentos inesquecíveis.
          </p>
          <p>
          Descubra o Chile conosco e viva uma viagem especial!
          </p>
          <p className="names">Ricardo Lopes e Jenifer Santana</p>
          <h3 className="names">CEO Horizonte Andino</h3>
        </div>
      </div>
    </div>
  )
}

export default WhoAreU;