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

function App() {
  return (
      <div className="App">
        <Header /> {/* Header appears on all pages */}
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/generate" element={<Generate />} />
          <Route path="/grade" element={<Grade />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/about" element={<About />} />
          <Route path="/grader-page" element={<GraderPage />} />
        </Routes>

        <Footer /> {/* Footer appears on all pages */}
      </div>
  );
}

export default App;