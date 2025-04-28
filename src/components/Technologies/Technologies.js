import React from "react";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import {
  GridContainer,
  SectionHeading,
  TechCard,
  TechIcon,
  TechName,
} from "./TechnologiesStyles";

import {
  SiFirebase,
  SiGit,
  SiCss3,
  SiMongodb,
  SiExpress,
  SiTypescript,
  SiPython,
  SiJavascript,
  SiVite,
  SiTailwindcss,
  SiFastapi,
  SiPostman,
  SiPostgresql,
  SiVercel,
  SiNetlify,
  SiHostinger,
  SiRust,
  SiSolidity,
  SiEthereum,
} from "react-icons/si";
import {
  TbBrandNextjs,
  TbBrandCpp,
  TbBrandGolang,
  TbBrandReactNative,
} from "react-icons/tb";

import { FaReact, FaHardHat, FaWallet } from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";

const Technologies = () => (
  <Section id="technologies">
    <SectionDivider />
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
      <SectionText>
        I work with web, cloud, and blockchain technologies, building real-world
        projects and continuously expanding my skills.
      </SectionText>
    </SectionText>

    <SectionHeading>Programming Languages</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon>
          <SiPython />
        </TechIcon>
        <TechName>Python</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiJavascript />
        </TechIcon>
        <TechName>JavaScript</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiTypescript />
        </TechIcon>
        <TechName>TypeScript</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <TbBrandGolang />
        </TechIcon>
        <TechName>GoLang</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <TbBrandCpp />
        </TechIcon>
        <TechName>C++</TechName>
      </TechCard>
    </GridContainer>
    <SectionHeading>Web Dev & Frameworks</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon>
          <TbBrandNextjs />
        </TechIcon>
        <TechName>Next.js</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <FaReact />
        </TechIcon>
        <TechName>React.js</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiVite />
        </TechIcon>
        <TechName>Vite</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiTailwindcss />
        </TechIcon>
        <TechName>TailwindCSS</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiExpress />
        </TechIcon>
        <TechName>Express.js</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiFastapi />
        </TechIcon>
        <TechName>FastAPI</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <TbBrandReactNative />
        </TechIcon>
        <TechName>React Native</TechName>
      </TechCard>
    </GridContainer>
    {/* <SectionHeading>Blockchain</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon>
          <SiSolidity />
        </TechIcon>
        <TechName>Solidity</TechName>
      </TechCard>

      <TechCard>
        <TechIcon>
          <SiRust />
        </TechIcon>
        <TechName>Rust</TechName>
      </TechCard>

      <TechCard>
        <TechIcon>
          <SiEthereum />
        </TechIcon>
        <TechName>Ethereum</TechName>
      </TechCard>

      <TechCard>
        <TechIcon>
          <FaWallet />
        </TechIcon>
        <TechName>Metamask</TechName>
      </TechCard>

      <TechCard>
        <TechIcon>
          <FaHardHat />
        </TechIcon>
        <TechName>HardHat</TechName>
      </TechCard>
    </GridContainer> */}

    <SectionHeading>Databases & Hosting</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon>
          <SiMongodb />
        </TechIcon>
        <TechName>MongoDB</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiPostgresql />
        </TechIcon>
        <TechName>PostgreSQL</TechName>
      </TechCard>

      <TechCard>
        <TechIcon>
          <SiFirebase />
        </TechIcon>
        <TechName>Firebase</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiVercel />
        </TechIcon>
        <TechName>Vercel</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiNetlify />
        </TechIcon>
        <TechName>Netlify</TechName>
      </TechCard>
      {/* <TechCard>
        <TechIcon>
          <SiHostinger />
        </TechIcon>
        <TechName>Hostinger</TechName>
      </TechCard> */}
    </GridContainer>

    <SectionHeading>DevOps & Tools</SectionHeading>
    <GridContainer>
      <TechCard>
        <TechIcon>
          <IoLogoDocker />
        </TechIcon>
        <TechName>Docker</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiGit />
        </TechIcon>
        <TechName>Git</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiCss3 />
        </TechIcon>
        <TechName>VS Code</TechName>
      </TechCard>
      <TechCard>
        <TechIcon>
          <SiPostman />
        </TechIcon>
        <TechName>Postman</TechName>
      </TechCard>
    </GridContainer>
    <SectionDivider />
  </Section>
);

export default Technologies;
