import AboutUs from "../../components/HomePage/AboutUS";
import Header from "../../components/Header";
import Home from "../../components/HomePage/Home";
import Specialities from "../../components/HomePage/Specialities";

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
