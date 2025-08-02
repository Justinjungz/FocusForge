import { Layout } from "./components/Layout";
import { Hero } from "./components/sections/Hero";
import { Services } from "./components/sections/Services";
import { AboutUs } from "./components/sections/AboutUs";
import { CTA } from "./components/sections/CallToAction";

function App() {
  return (
    <Layout title="FocusForge">
    <Hero />
    <Services />
    <AboutUs />
    <CTA />
    </Layout>
  );
}

export default App
