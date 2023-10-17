import { useFixedHashScroll } from '/hook'
import "../styles/global.scss"

function MyApp({ Component, pageProps }) {
  useFixedHashScroll()
  return <Component {...pageProps} />
}

export default MyApp;

