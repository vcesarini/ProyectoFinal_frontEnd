import { Route, Routes } from "react-router-dom"
import HomePage from "../pages/HomePage"
import Nosotros from "../pages/Nosotros"
import DetalleTareaPage from "../pages/DetalleTareaPage"

const AppRoutes: React.FC = () => {
  return (
    <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/nosotros" element={<Nosotros/>}/>
        <Route path="/detalle/:taskId" element={<DetalleTareaPage/>}/>
    </Routes>
  )
}

export default AppRoutes