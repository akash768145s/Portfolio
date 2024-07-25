import React from "react";

import {
  BlogCard,
  CardInfo,
  ExternalLinks,
  GridContainer,
  HeaderThree,
  Hr,
  Tag,
  TagList,
  TitleContent,
  UtilityList,
  Img,
} from "./ProjectsStyles";
import {
  Section,
  SectionTitle,
  SectionText,
  SectionDivider,
} from "../../styles/GlobalComponents";
import { projects } from "../../constants/constants";

const Projects = () => (
  <>
    <Section id="projects">
      <SectionTitle main>Projects</SectionTitle>
      <SectionText>
        I've delivered impactful solutions through various client projects.
        Explore some of my standout personal projects below.
      </SectionText>

      <GridContainer>
        {projects.map((p, i) => {
          return (
            <BlogCard key={i}>
              <Img src={p.image} />
              <HeaderThree title={p.title}>{p.title}</HeaderThree>
              <Hr />

              <CardInfo className="card-info">{p.description}</CardInfo>
              <div>
                <TitleContent>Tech Stack</TitleContent>
                <Hr />
                <TagList>
                  {p.tags.map((t, i) => {
                    return <Tag key={i}>{t}</Tag>;
                  })}
                </TagList>
              </div>
              <UtilityList>
                <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
                <ExternalLinks href={p.source}>Source Code</ExternalLinks>
              </UtilityList>
            </BlogCard>
          );
        })}
      </GridContainer>
    </Section>
    <SectionDivider colorAlt />
  </>
);

export default Projects;
