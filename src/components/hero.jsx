import { backgroundImage } from "../assets";

function HeroSection() {
  return (
    <div>
      <section
        className="w-full h-screen text-white flex justify-center text-center flex-col items-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <p className="text-lg py-8">ENJOY YOUR SHOPPING WITH US!</p>
        <h2 className="text-4xl">SHOPPING AT MOHEEN COLLECTIONS</h2>
        <span className="bg-primary py-4 flex justify-center w-32 my-8 text-lg space-x-4">
          <button>SHOP NOW</button>
        </span>
      </section>
    </div>
  );
}

export default HeroSection;
