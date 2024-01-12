import { BrowserRouter, Routes, Route } from "react-router-dom"
//Componentes
import { ButtonTop } from '../components/ButtonTop'
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'
import { NotFound } from "../pages/NotFound"

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <ButtonTop />
      <br />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="/website" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}