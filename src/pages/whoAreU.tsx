import whoAreU from "../assets/euejeni.jpeg"
import "../css/pages/whoAreU.css"

function WhoAreU() {
  return(
    <div className="bg-secondary who">
      <div className="bg-secondary div-img">
        <img className="img-who" src={whoAreU}></img>
      </div>
    </div>
  )
}

export default WhoAreU;