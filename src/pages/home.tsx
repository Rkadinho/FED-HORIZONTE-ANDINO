import Header from "../components/headers";
import home from "../assets/home.jpeg"
import '../css/pages/home.css';

function Home() {
  return (
    <>
      <Header></Header>
      <div>
        <img src={home} className="homeImg"></img>
      </div>
    </>
  )
}

export default Home;