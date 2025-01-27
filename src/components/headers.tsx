import '../css/components/headers.css';
import MinhaImagem from "../assets/icon.png";
import '../css/global.css'

export default function Header() {
  return (
    <>
      <header className="bg shadow header">
        <section className='space-b'>
          <div>
          <img src={MinhaImagem} alt="Descrição da imagem" />
          </div>
          <div className='options'>
            <a className='text-primary'>HOME</a>
            <a className='text-primary'>QUEM SOMOS?</a>
            <a className='text-primary'>EXPERIÊNCIAS ANDINAS</a>
            <a className='text-primary'>AVENTURAS ANDINAS</a>
            <a className='text-primary'>FAÇA SUA RESERVA</a>        
          </div>
        </section>
      </header>
    </>
  )
}