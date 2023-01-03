import About from './Components/About';
import Aside from './Components/Aside';
import Contact from './Components/Contact';
import Experts from './Components/Experts';
import Footer from './Components/Footer';
import Nav from './Components/Nav';
import Publicity from './Components/Publicity';
import Services from './Components/Services';
import Hero from './Hero';
import './index.css'
// import './Components/Toggle'

const App=()=>{
return (
  <>
    <Nav />
    <Aside />
    <Hero img="/images/Email campaign-cuate.svg" />
    <Publicity />
    <About />
    <Services />
    <Experts />
    <Contact />
    <Footer />
  </>
);
}
export default App;
