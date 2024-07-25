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
          Hey there,
        </SectionTitle>
        <SectionText>
          I'm Akash SakthiMurugan,Currently leading front-end development at DNYX with a
          focus on Next.js and React.js to build dynamic web applications. My
          experience as an intern at Digenie Company has shaped my skills, and
          now I mentor interns at DNYX. Pursuing a B.Tech at SSN College of
          Engineering, I'm strengthening my problem-solving skills and aiming to
          transition to a data engineer in the near future.
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
