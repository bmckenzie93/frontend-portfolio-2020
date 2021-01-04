import './App.css';
import Hero from './components/layout/Hero/Hero';
import About from './components/layout/About/About';
import Projects from './components/layout/Projects/Projects';
import Contact from './components/layout/Contact/Contact';
import Form from './components/UI/Form/Form';

function App() {
  return (
    <div className="App">
      <Hero />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
