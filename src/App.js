import './App.css';
import { Goals } from './components/Goals';
import { Information } from './components/Information';
import Landing from './components/Landing';
import { Navbar } from './components/Navbar';
import { Success } from './components/Success';
import { Project } from './components/ProjectSection';
import { Footer } from './components/Footer';
import { DarkMode } from './components/Darkmood/DarkMode';
import { LocationMap } from './components/LocationMap';
import { IntlProvider } from 'react-intl';
import { ContactUs } from './components/ContactUs';
import { AboutSection } from './components/AboutSection';


function App() {
  return (
    <IntlProvider>
      <div className="App">
        <Navbar />
        <Landing />
        <Goals />
        <Success />
        <AboutSection/>
        <Information />
        <Project />
        <LocationMap />
        <ContactUs />
        <Footer />
        
      </div>
    </IntlProvider>
  );
}

export default App;
