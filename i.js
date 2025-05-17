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
      <SectionTitle main>Featured Projects</SectionTitle>
      <SectionText>
        Explore some of my standout creations that showcase thoughtful design,
        optimized performance, and impactful solutions.
      </SectionText>

      <GridContainer>
        {projects.map((p, i) => (
          <BlogCard key={i}>
            <Img src={p.image} alt={p.title} />
            <HeaderThree title={p.title}>{p.title}</HeaderThree>
            <Hr />
            <CardInfo>{p.description}</CardInfo>
            <TitleContent>Tech Stack</TitleContent>
            <TagList>
              {p.tags.map((tag, index) => (
                <Tag key={index}>{tag}</Tag>
              ))}
            </TagList>
            <UtilityList>
              <ExternalLinks href={p.visit}>Live Preview</ExternalLinks>
              <ExternalLinks href={p.source}>Source Code</ExternalLinks>
            </UtilityList>
          </BlogCard>
        ))}
      </GridContainer>
    </Section>

    <SectionDivider colorAlt />
  </>
);

export default Projects;
