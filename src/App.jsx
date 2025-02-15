import './App.css'
import Footer from './components/Footer/Footer';
import Navbar from './components/NavBar/NavBar';
import Home from './views/Home/Home';

function App() {


  return (
    <div>
      <Navbar />
      <div>
        <Home />
      </div>
      <Footer />
    </div>
  )
}

export default App
