import About from '../components/About';
import Contact from '../components/Contact';
import Header from '../components/Header';
import Navbar from '../components/Navbar';
import Skills from '../components/Skills';
import Work from '../components/Work';
import Footer from '../components/Footer';

function Home() {
  return (
    <div>
      <Navbar />
      <Header />
      <About />
      <Skills />
      <Work />
      <Contact />
      <Footer />
    </div>
  );
}

export default Home;
