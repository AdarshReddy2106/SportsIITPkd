import { Routes, Route } from "react-router-dom";
import { Layout } from './components/shared/Layout';
import { Hero } from './components/sections/Hero';
import { Gallery } from './components/sections/Gallery';
import { Services } from './components/sections/Services';
import { AboutUs } from './components/sections/AboutUs';
import { Facilities } from './components/sections/Facilities';
import { Events } from './components/sections/Events';
import { Booking } from './components/sections/Booking';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <Layout title="Sports IITPkd">
      <div>
        <Routes>
          <Route path="/" element={
            <>
              <Hero />
              <Facilities />
              <Events />
              <Services />
              <AboutUs />
              <Booking />
              <Contact />
              <Gallery />
            </>
          } />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/events" element={<Events />} />
          <Route path="/bookings" element={<Booking />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Layout>
  );
}

export default App;
