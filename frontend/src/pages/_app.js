// pages/_app.js
import '../src/Theme.css';
import '../src/pages/Home/Home.css';
import '../src/pages/Generate/Generate.css';
import '../src/pages/Grade/Grade.css';
import '../src/pages/SignIn/SignIn.css';
import '../src/pages/About/About.css';
import '../src/pages/GraderPage/GraderPage.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}