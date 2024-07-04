import React from 'react';

import { Section, SectionText, SectionTitle, Link } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there,
        </SectionTitle>
        <SectionText>
        I'm Akash SakthiMurugan, a web developer from Tamil Nadu, India, specializing in front-end and back-end development with frameworks like Next.js, React.js, and Flask. Currently, I'm a B.Tech Information Technology student at SSN College of Engineering and interned at Digenie as a Web Developer. I enjoy building dynamic web applications, contributing to open-source projects, and engaging with the developer community
        </SectionText>
        <Button onClick={(e) => {
          e.preventDefault();
          window.location.href = '/files/resume.pdf';
        }}>My Resume</Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
