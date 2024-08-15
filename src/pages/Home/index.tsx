import AboutUs from "./components/AboutUS";
import Header from "../../components/Header";
import Home from "./components/Home";
import Specialities from "./components/Specialities";

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
