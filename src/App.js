import './App.css';
import Hero from './components/layout/Hero/Hero';
import About from './components/layout/About/About';
import Projects from './components/layout/Projects/Projects';
import Contact from './components/layout/Contact/Contact';
import Footer from './components/layout/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
