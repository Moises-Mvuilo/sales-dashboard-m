import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<>LOGIN</>} />
        <Route path="/Cadastro" element={<>CADASTRO</>} />
        <Route path="/Home" element={<>HOME</>} />
        <Route path="/Leads" element={<>LEADS</>} />
        <Route path="/Perfil" element={<>PERFIL</>} />
      </Routes>
    </Router>
  )
}

export default App
