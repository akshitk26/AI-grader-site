import { Routes, Route } from 'react-router-dom';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import Home from './pages/Home/Home';
// import HowToUse from './pages/HowToUse/HowToUse';
// import Donate from './pages/Donate/Donate';
import Generate from './pages/Generate/Generate';
import Grade from './pages/Grade/Grade';
import SignIn from './pages/SignIn/SignIn';
import About from './pages/About/About';
import GraderPage from './pages/GraderPage/GraderPage';

import '../src/components/Footer/Footer.css';
import '../src/components/Header/Header.css';

import '../src/Theme.css';
import '../src/pages/Home/Home.css';
import '../src/pages/Generate/Generate.css';
import '../src/pages/Grade/Grade.css';
import '../src/pages/SignIn/SignIn.css';
import '../src/pages/About/About.css';
import '../src/pages/GraderPage/GraderPage.css';

function App() {
  return (
    <div className="App">
        <Header /> {/* Header appears on all pages */}
        <Routes>
          <Route path="/Home" element={<Home />} /> {/* Default route */}
          <Route path="/Generate" element={<Generate />} />
          <Route path="/Grade" element={<Grade />} />
          <Route path="/Signin" element={<SignIn />} />
          <Route path="/About" element={<About />} />
          <Route path="/GraderPage" element={<GraderPage />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer /> {/* Footer appears on all pages */}
    </div>
  );
}

export default App;