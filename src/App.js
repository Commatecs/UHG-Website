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

function App() {
  return (
    <div className="App">
      <Navbar />
      <Landing />
      <Goals />
      <Success/>
      <Information/>
      <Project />
      <LocationMap />
      <Footer/>
    </div>
  );
}

export default App;
