import { useEffect } from "react"
import './styles/App.sass'
//Rutas
import MyRoutes from "./routes/Routes"
//bootstrap
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.min.js'
//Fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { faFontAwesome } from '@fortawesome/free-brands-svg-icons'
library.add(fas, faFontAwesome)
//AOS
import Aos from "aos"
import "aos/dist/aos.css"

function App() {

  useEffect(() => {
    Aos.init();
  }, [])

  return (
    <MyRoutes />
  )
}

export default App
