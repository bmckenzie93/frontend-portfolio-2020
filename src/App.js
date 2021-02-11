import './App.css';
import Home from './components/layout/Home/Home';
import About from './components/layout/About/About';
import Projects from './components/layout/Projects/Projects';
import Contact from './components/layout/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import Navbar from './components/layout/Navbar/Navbar';


function App() {
  return (
    <div className="App">
      <Home />
      <Navbar />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;