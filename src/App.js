import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import Apropos from "./Components/Apropos/Apropos";
import Skills from "./Components/Skills/Skills";
import Gallery from "./Components/Gallery/Gallery";
import Contact from "./Components/Contacte/Contacte";
import Footer from "./Components/Footer/Footer";
import './styles/App.scss';

function App() {
  return (
    <div className="App">
      
      <header className="App-header">
        <NavBar />
        <Banner />
      </header>
      <main>
        <Apropos />
        <Skills />
     
        <Gallery />
        <Contact />

      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
