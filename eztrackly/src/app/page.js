import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import LandingPage from "./components/landingpage";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="pt-16">
        <LandingPage />
      </main>

      <Footer />
    </>
  );
}