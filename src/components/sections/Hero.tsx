// Main driver to the Website
import { Container } from "../shared/Container";
import backgroundImage from "../../assets/background.png"; // Adjust the path as necessary
import "../../index.css";

export const Hero = () => {
  return (
    <section
      className="hero-section relative min-h-[80vh] flex items-center justify-center pt-0 pb-16 bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <Container className="relative z-10 flex flex-col items-center text-center">
        <h1 className="font-extrabold text-4xl sm:text-5xl md:text-6xl leading-tight">
          <span className="text-black dark:text-white">TOGETHER WE </span>
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 drop-shadow-[0_2px_16px_rgba(236,72,153,0.7)]">
            COMPETE
          </span>
          <br />
          <span className="text-black dark:text-white">TOGETHER WE </span>
          <span className="ml-2 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-pink-500 to-purple-600 drop-shadow-[0_2px_16px_rgba(236,72,153,0.7)]">
            CONQUER
          </span>
        </h1>
        <p className="mt-6 text-lg text-gray-200 max-w-2xl">
          Experience world-class sports facilities and training programs at IIT
          Palakkad. Join our elite sports community and unleash your potential.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#booking"
            className="px-6 py-3 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold shadow-lg"
            style={{ boxShadow: "0 0 24px 6px #d946ef55" }}
          >
            Book Facilities
          </a>
          <a
            href="#events"
            className="px-6 py-3 rounded-full border border-white text-white font-semibold bg-transparent hover:bg-white hover:text-black transition"
          >
            Join Events
          </a>
        </div>
        <div className="flex gap-12 mt-12 justify-center">
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-pink-400">15+</div>
            <div className="text-white text-sm mt-1">SPORTS FACILITIES</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-cyan-400">500+</div>
            <div className="text-white text-sm mt-1">ACTIVE ATHLETES</div>
          </div>
          <div>
            <div className="text-2xl sm:text-3xl font-bold text-pink-400">24/7</div>
            <div className="text-white text-sm mt-1">ACCESS AVAILABLE</div>
          </div>
        </div>
      </Container>
    </section>
  );
};