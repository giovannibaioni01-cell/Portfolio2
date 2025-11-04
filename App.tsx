import { Navigation } from "./components/Navigation";
import { Hero } from "./components/Hero";
import { Gallery } from "./components/Gallery";
import { Videos } from "./components/Videos";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
import { Toaster } from "./components/ui/sonner";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <main id="hero">
        <Hero />
        <Gallery />
        <Videos />
        <Contact />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}