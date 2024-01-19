import { BrowserRouter, Routes, Route } from "react-router-dom"
//Componentes
import { ButtonTop } from "../components/ButtonTop"
import { ButtonWhatsapp } from "../components/ButtonWhatsapp"
import { Navbar } from "../components/Navbar"
import { Home } from "../pages/Home"
import { NotFound } from "../pages/NotFound"

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ButtonWhatsapp />
      <ButtonTop />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="/website" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}