import { Layout } from './components/shared/Layout';
import { Hero } from './components/sections/Hero';
import { Brands } from './components/sections/Brands';
import { Services } from './components/sections/Services';
import { AboutUs } from './components/sections/AboutUs';

function App() {
  return <Layout title="Sports IITPkd" >
      <Hero />
      <AboutUs />
      <Services />
      <Brands />
  </Layout>  
}

export default App
