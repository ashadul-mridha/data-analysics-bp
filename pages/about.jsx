import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";

export default function About() {
  return (
    <>
      <h1>About Page</h1>
    </>
  );
}

About.getLayout = function getLayout(page) {
  return (
    <>
      <Header />
      {page}
    </>
  );
};
