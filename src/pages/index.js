import BgAnimation from "../components/BackgrooundAnimation/BackgroundAnimation";
import ContactSection from "../components/Contact/contact";
import Timeline from "../components/Experience/experience";
import Hero from "../components/Hero/Hero";
import Projects from "../components/Projects/Projects";
import Technologies from "../components/Technologies/Technologies";
import { Layout } from "../layout/Layout";
import { Section } from "../styles/GlobalComponents";

const Home = () => {
  return (
    <Layout>
      <Section grid>
        <Hero />     
        <BgAnimation />
      </Section>
      <Timeline/>
      <Technologies />
      <Projects />
      <ContactSection/>
    </Layout>
  );
};

export default Home;
