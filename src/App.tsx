import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/header'
import Home from './pages/home'
import Footer from './components/footer'
import SocialMedia from './pages/socialMedia'
import Ilustracao from './pages/ilustracao'
import Giovanne from './pages/giovanne'
import RefugioDoSol from './pages/refugioDoSol'
import LaJanda from './pages/laJanda'
import Humenhuk from './pages/humenhuk'
import ArtComFarinha from './pages/artComFarinha'
import Aline from './pages/aline'

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/socialMedia' element={<SocialMedia />} />
          <Route path='/ilustracao' element={<Ilustracao />} />
          <Route path='/giovanne' element={<Giovanne />} />
          <Route path='/refugioDoSol' element={<RefugioDoSol />} />
          <Route path='/laJanda' element={<LaJanda />} />
          <Route path='/humenhuk' element={<Humenhuk />} />
          <Route path='/artComFarinha' element={<ArtComFarinha />} />
          <Route path='/aline' element={<Aline />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  )
}

export default App
