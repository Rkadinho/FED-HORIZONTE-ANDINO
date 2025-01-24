import './App.css'
import Home from './pages/home'
import WhoAreU from './pages/whoAreU'
import Headers from './components/headers'

function App() {

  return (
    <div className="app-container">
      <Headers />
      <section className="section">
        <Home />
      </section>
      <section className='how-section'>
        <WhoAreU />
      </section>
    </div>
  )
}

export default App
