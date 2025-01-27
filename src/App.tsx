import './App.css'
import Home from './pages/home'
import WhoAreU from './pages/whoAreU'
import Headers from './components/headers'
import Divider from './components/divider'
import Button from './components/button'
import Tours from './pages/tours'
import FeedBack from './pages/feedback'
import './css/global.css'

function App() {

  return (
    <div className="app-container">
      <Headers />
      <section className="section">
        <Home />
      </section>
      <section>
        <Divider>
          <h2>Entre em contato com nossa equipe e faça seu orçamento</h2>
          <Button background='bg-secondary text-secondary'>Solicite seu orçamento</Button>
        </Divider>
      </section>
      <section className='how-section'>
        <WhoAreU />
      </section>
      <section>
        <Tours/>
      </section>
      <section>
        <Divider>
          <h2>
            Se você ainda tem dúvidas sobre os nossos passeios e não sabe qual o melhor roteiro
          </h2>
          <Button background='bg-secondary text-secondary'>Fale com a gente</Button>
        </Divider>
      </section>
      <section className='center'>
        <FeedBack />
      </section>
    </div>
  )
}

export default App
