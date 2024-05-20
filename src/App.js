import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import Header from './Header';
import ImageSection from './ImageSection';
import AboutPahal from './AboutPahal';
import OurProjects from './OurProjects';
import ImageGallery from './ImageGallery';
import Testimonials from './Testimonials';
import FooterComponent from './Footer.js';
function App() {
  return (
    <div className="App">
      <Header/>
      <NavBar/>
      <ImageSection/>
      <AboutPahal/>
      <OurProjects/>
      <ImageGallery/>
      <Testimonials/>
      <FooterComponent/>
    </div>
  );
}

export default App;
