
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Content from './components/Content';
import Header from './components/Header';
import Projects from './components/Projects';
import Resume from './components/Resume';
import Footer from './components/Footer';
function App() {
  return (
    <div className="App">
    <Header/>
    <Content/>
    <About/>
    <Projects/>
    <Resume/>
    <Contact/>
    <Footer/>

  
    </div>
  );
}

export default App;
