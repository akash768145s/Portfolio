import {DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiCss3, SiMysql,SiDjango,SiFlask,SiPython,SiJavascript,SiMongodb,SiExpress,SiTypescript } from "react-icons/si";
import { TbBrandNextjs,TbBrandCpp,TbSql,TbBrandGolang } from "react-icons/tb";
import { FaReact,FaNode} from "react-icons/fa";
import { IoLogoDocker } from "react-icons/io5";

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
    slug: "ReactJS",
    Component:FaReact,
    title: "ReactJS",
    Description: () => <>Intermediate</>,
  },
  {
    slug: "Typescript",
    Component:SiTypescript,
    title: "Typescript",
    Description: () => <>Beginner</>,
  },
  
  {
    slug: "NodeJS",
    Component:FaNode,
    title: "NodeJS",
    Description: () => <>Basic</>,
  },
  {
    slug: "ExpressJS",
    Component:SiExpress,
    title: "ExpressJS",
    Description: () => <>Intermediate</>,
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
    slug: "golang",
    Component:TbBrandGolang,
    title: "Golang",
    Description: () => <>Intermediate</>,
  },
  {
    slug: "docker",
    Component:IoLogoDocker,
    title: "Docker",
    Description: () => <>Beginner</>,
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
    slug: "MongoDB",
    Component: SiMongodb,
    title: "MongoDB",
    Description: () => <>Basic</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Intermediate</>,
  },
];
