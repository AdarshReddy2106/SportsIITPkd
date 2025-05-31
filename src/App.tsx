import { Layout } from './components/shared/Layout';
import { Hero } from './components/sections/Hero';
import { Brands } from './components/sections/Brands';
import { Services } from './components/sections/Services';
import { AboutUs } from './components/sections/AboutUs';
import { Facilities } from './components/sections/Facilities';
import { Events } from './components/sections/Events';
import { Booking } from './components/sections/Booking';
import { Contact } from './components/sections/Contact';

function App() {
  return (
    <Layout title="Sports IITPkd">
      <Hero />
      <Facilities />
      <Events />
      <Services />
      <AboutUs />
      {/* <Brands /> */}
      <Booking />
      <Contact />
    </Layout>
  );
}

export default App;
