import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Home from './pages/Home/Home';
import HowToUse from './pages/HowToUse/HowToUse';
import Donate from './pages/Donate/Donate';
import Generate from './pages/Use/Generate/Generate';
import Grade from './pages/Use/Grade/Grade';
import SignIn from './pages/SignIn/SignIn';

function App() {
  return (
    <div className="App">
      <Router>
        <Header /> {/* Header appears on all pages */}
        <Routes>
          <Route path="/Home" element={<Home />} /> {/* Default route */}
          <Route path="/HowToUse" element={<HowToUse />} />
          <Route path="/Donate" element={<Donate />} />
          <Route path="/Generate" element={<Generate />} />
          {/* Add more routes as needed */}
        </Routes>
        <Footer /> {/* Footer appears on all pages */}
      </Router>
    </div>
  );
}

export default App;