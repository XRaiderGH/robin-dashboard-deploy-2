import '../styles/globals.css';
import '../styles/styles.css';
import "tailwindcss/tailwind.css";
import Layout from "../components/layout";
import { AnimatePresence } from 'framer-motion';



function MyApp({ Component, pageProps, router }) {
  return(
      <Layout>
          <AnimatePresence exitBeforeEnter>
              <Component {...pageProps} key={router.route} />
          </AnimatePresence>
      </Layout>
  )
}

export default MyApp
