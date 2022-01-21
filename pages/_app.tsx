import { AnimatePresence, AnimateSharedLayout } from "framer-motion";
import "../styles/globals.scss";

function MyApp({ Component, pageProps }) {
  return (
    <AnimateSharedLayout>
      <AnimatePresence>
        <Component {...pageProps} />
      </AnimatePresence>
    </AnimateSharedLayout>
  );
}

export default MyApp;
