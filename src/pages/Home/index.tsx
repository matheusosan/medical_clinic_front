import Header from "../../components/Header";
import AboutUs from "./components/AboutUS";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Specialities from "./components/Specialities";

export default function HomePage() {
  return (
    <main className="min-h-screen h-auto pb-12 md:pb-0">
      <Header />
      <Home />
      <Specialities />
      <AboutUs />
      <Footer />
    </main>
  );
}
