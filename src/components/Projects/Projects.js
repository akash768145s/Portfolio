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
        {projects.map((project, index) => (
          <BlogCard key={index}>
            <Img src={project.image} alt={project.title} />
            <HeaderThree title={project.title}>{project.title}</HeaderThree>
            <Hr />
            <CardInfo>{project.description}</CardInfo>
            <div>
              <TitleContent>Tech Stack</TitleContent>
              <TagList>
                {project.tags.map((tag, i) => (
                  <Tag key={i}>{tag}</Tag>
                ))}
              </TagList>
            </div>
            <UtilityList>
              <ExternalLinks
                href={project.visit}
                target="_blank"
                rel="noopener noreferrer"
              >
                Live Preview
              </ExternalLinks>
              <ExternalLinks
                href={project.source}
                source="true"
                target="_blank"
                rel="noopener noreferrer"
              >
                Source Code
              </ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>
    <SectionDivider colorAlt />
  </>
);

export default Projects;
