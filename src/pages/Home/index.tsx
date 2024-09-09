import Header from "../../components/Header";
import AboutUs from "./components/AboutUS";
import Home from "./components/Home";
import Specialities from "./components/Specialities";

export default function HomePage() {
  return (
    <main className="min-h-screen h-auto">
      <Header />
      <Home />
      <Specialities />
      <AboutUs />
    </main>
  );
}
