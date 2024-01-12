import { BrowserRouter, Routes, Route } from "react-router-dom"
//Componentes
import { Navbar } from '../components/Navbar'
import { Home } from '../pages/Home'
import { NotFound } from "../pages/NotFound"

export default function MyRoutes() {
  return (
    <BrowserRouter>
      <Navbar />
      <br />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route index element={<Home />} />
        <Route path="/website" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}