import Header from "../components/Header";
import Specialities from "../components/Specialities";
import AboutUs from "../components/AboutUS";
import Home from "../components/Home";

export default function HomePage() {
  return (
    <main className="min-h-screen h-auto mt-24">
      <Header />
      <Home />
      <Specialities />
      <AboutUs />
    </main>
  );
}
