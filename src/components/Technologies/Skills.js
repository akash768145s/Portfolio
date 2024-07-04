import { DiAndroid, DiTerminal, DiJava, DiHtml5 } from "react-icons/di";
import { SiFirebase, SiGit, SiDart, SiCss3, SiMysql, SiAmazonaws,SiDjango } from "react-icons/si";

import { TbBrandKotlin,TbBrandNextjs } from "react-icons/tb";

export const Skills = [
  {
    slug: "NextJS",
    Component: TbBrandNextjs,
    title: "NextJS",
    Description: () => <>React framework</>,
  },
  {
    slug: "django",
    Component: SiDjango,
    title: "Django",
    Description: () => <>Python-based web framework</>,
  },
  {
    slug: "kotlin",
    Component: TbBrandKotlin,
    title: "Kotlin",
    Description: () => <>Android apps and Lambda functions</>,
  },
  {
    slug: "dart",
    Component: SiDart,
    title: "Dart",
    Description: () => <>Flutter apps only</>,
  },
  {
    slug: "java",
    Component: DiJava,
    title: "Java",
    Description: () => <>Android apps and Lambda functions</>,
  },

  {
    slug: "html",
    Component: DiHtml5,
    title: "HTML",
    Description: () => <>Static webpages and portfolio projects</>,
  },
  {
    slug: "css",
    Component: SiCss3,
    title: "CSS",
    Description: () => <>Styling of my webpages</>,
  },

  {
    slug: "sql",
    Component: SiMysql,
    title: "MySQL",
    Description: () => <>Storing client and user data</>,
  },
  {
    slug: "aws",
    Component: SiAmazonaws,
    title: "AWS Lambda",
    Description: () => <>Lambda functions for creating APIs</>,
  },
  {
    slug: "terminal",
    Component: DiTerminal,
    title: "Bash",
    Description: () => <>Ease of life and build scripts</>,
  },
  {
    slug: "firebase",
    Component: SiFirebase,
    title: "Firebase",
    Description: () => <>Authentication, database and analytics</>,
  },
  {
    slug: "git",
    Component: SiGit,
    title: "Git",
    Description: () => <>Code management and open source contributions</>,
  },
];
