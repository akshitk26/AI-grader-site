// pages/_app.js
import '../Theme.css';
import '../pages/Home/Home.css';
import '../pages/Generate/Generate.css';
import '../pages/Grade/Grade.css';
import '../pages/SignIn/SignIn.css';
import '../pages/About/About.css';
import '../pages/GraderPage/GraderPage.css';

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}