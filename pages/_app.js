import 'bootstrap/dist/css/bootstrap.min.css';
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import ContextApiCompo from '../context';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => page)

  //if layout found
  if (getLayout) {
    return getLayout(
      <>
        <ContextApiCompo>
          <Component {...pageProps} />
        </ContextApiCompo>
      </>
    )
  }

  //if there are not layout found here
  return (
    <>
      <ContextApiCompo>
        <Component {...pageProps} />
      </ContextApiCompo>
    </>
  )
}
