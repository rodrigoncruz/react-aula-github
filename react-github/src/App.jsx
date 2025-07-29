import './css/bnt.css'

import Apresentacao from './components/Apresentacao'
import Botao from './components/Botao'
import Secao from './components/Secao'

function App() {
  const name = "Rodrigo Xavier" 
  const age = "18"
  const city = "São Gonçalo"
  
  return (
    <>
      <div className="container d-flex justify-content-center flex-column align-items-center">
        <div className="row mt-3">   
        <header>  
        <Apresentacao className ="col-12 col-md-4 mb-4" name={name} age={age} city={city} />
        </header>
        </div>

        <main>
         <section className="container d-flex justify-content-center flex-column align-items-center"> 
          <Secao className = "col-12 col-md-4 mb-4" img = "https://cdn-wcsm.alura.com.br/2025/04/capa-como-iniciar-estudos-no-front-end.jpg" title ="Front-End Senai" />
         </section>
        </main>

        <div className="container d-flex justify-content-center flex-column align-items-center"> 
        <nav className="col-12 col-md-4 mt-4">
        <Botao />
        </nav>
        </div>
      </div>
    </>
  )
}

export default App
