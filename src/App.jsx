import Skill from './components/Skill';
import Hero from './components/Hero';
import NavBar from './components/NavBar';
import Projects from './components/Projects';
import Footer from './components/Footer';
import Card from './other/Card';
function App() {

  return (
    <>
    <NavBar />
    <div className="container-xl">
    <Hero/>
    <Skill/>
    <Projects/>
    <Card/>
    </div>
   
    <Footer/>
   
     
    </>
  )
}

export default App
