import { Routes, Route } from 'react-router-dom'

import Principal from '../pages/principal'
import Sobre from '../pages/sobre'
import Galeria from '../pages/galeria'
import Detalhe from '../pages/detalhes'

export default function Rotas() {
    return (
        <>
            <Routes>
                <Route path="/" element={<Principal />} />
                <Route path="/sobre" element={<Sobre />} />
                <Route path="/galeria" element={<Galeria />} />
                <Route path="/galeria/detalhe" element={<Detalhe />} />
            </Routes>
        </>
    )
}