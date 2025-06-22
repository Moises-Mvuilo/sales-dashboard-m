import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login, Registration } from './Pages/index'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Cadastro" element={<Registration />} />
        <Route path="/Home" element={<>HOME</>} />
        <Route path="/Leads" element={<>LEADS</>} />
        <Route path="/Perfil" element={<>PERFIL</>} />
      </Routes>
    </Router>
  )
}

export default App
