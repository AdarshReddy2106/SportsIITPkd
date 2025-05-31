import { Layout } from './components/shared/Layout';
import { Hero } from './components/sections/Hero';
import { Brands } from './components/sections/Brands';
import { Services } from './components/sections/Services';

function App() {
  return <Layout title="Sports IITPkd" >
      <Hero />
      <Brands />
      <Services />
  </Layout>  
}

export default App
