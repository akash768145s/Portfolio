import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws,SiDjango,SiFlask,SiPython,SiJavascript } from "react-icons/si";
import { TbBrandKotlin,TbBrandNextjs,TbBrandCpp,TbSql } from "react-icons/tb";


export const Skills = [
  {
    slug: "NextJS",
    Component: TbBrandNextjs,
    title: "NextJS",
    Description: () => <>Intermediate</>,
  },
  {
    slug: "django",
    Component: SiDjango,
    title: "Django",
    Description: () => <>Intermediate</>,
  },
  {
    slug: "Flask",
    Component:SiFlask,
    title: "Flask",
    Description: () => <>Basic</>,
  },
  {
    slug: "Python",
    Component:SiPython,
    title: "Python",
    Description: () => <>Advanced</>,
  },
  {
    slug: "C++",
    Component:TbBrandCpp,
    title: "C++",
    Description: () => <>Intermediate</>,
  },
  {
    slug: "javascript",
    Component:SiJavascript,
    title: "JavaScript",
    Description: () => <>Intermediate</>,
  },
  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Intermediate</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Intermediate</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Intermediate</>,
  },
  {
    slug: "sql",
    Component: TbSql,
    title: "SQL",
    Description: () => <>Intermediate</>,
  },

  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Basic</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Intermediate</>,
  },
];
