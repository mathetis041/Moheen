import { useState } from "react";
import Header from "./layout/header";
import HeroSection from "./components/hero";
import AboutSection from "./components/about";
import ProductSection from "./components/products";
import ReviewSection from "./components/review";
import Contact from "./components/contact";
import Footer from "./layout/footer";

function App() {
  const [cart, setCart] = useState(0);

  return (
    <>
      <Header cart={cart} />
      <HeroSection />
      <AboutSection />
      <ProductSection changeCart={setCart} />
      <ReviewSection />
      <Contact />
      <Footer />
    </>
  );
}
export default App;
