import "../app/globals.css";
import {ThemeProvider} from 'next-themes'

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class"
    defaultTheme="dark"
    enableSystem
    disableTransitionOnChange >
      <div>
        <Component {...pageProps} />
      </div>
    </ThemeProvider>
  );
}

export default MyApp;