import React from "react";
import {
  Section,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { LeftSection } from "./HeroStyles";
import Button from "../../styles/GlobalComponents/Button";

const Hero = (props) => (
  <>
    <Section row nopadding>
      <LeftSection>
        <SectionTitle main center>
          Hey there!
        </SectionTitle>
        <SectionText>
          I'm Akash SakthiMurugan, passionate about building impactful digital
          experiences. With experience mentoring interns at DNYX and developing
          educational games to promote Tamil learning, I strive to blend
          technology with creativity. Currently pursuing a B.Tech in Information
          Technology at SSN, I am expanding my skills into Blockchain
          Dev to drive future innovations.
        </SectionText>
        <Button
          className="px-4 py-2 mt-4 text-white bg-blue-500 rounded hover:bg-blue-700 sm:px-2 sm:py-1"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = "/files/resume.pdf";
          }}
        >
          My Resume
        </Button>
      </LeftSection>
    </Section>
  </>
);

export default Hero;
