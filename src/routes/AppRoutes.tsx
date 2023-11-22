import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Nosotros from "../pages/Nosotros"
import Contacto from "../pages/Contacto"
import DetalleTareaPage from "../pages/DetalleTareaPage"
import TareasPage from "../pages/TareasPage"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/tareasPage" element={<TareasPage/>}/>
        <Route path="/contacto" element={<Contacto/>}/>
        <Route path="/detalle/:taskId" element={<DetalleTareaPage/>}/>
    </Routes>
  )
}

export default AppRoutes