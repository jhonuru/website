import { useEffect } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import './styles/App.sass'
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faFontAwesome)
//Componentes
import { Navbar } from './components/Navbar'
import { Home } from './pages/Home'
//AOS
import Aos from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <br />
      <br />
      <br />
      <Routes>
        <Route path="*" element={<h1>Not Found 404</h1>} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
