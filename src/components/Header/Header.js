import Link from "next/link";
import Image from "next/image";
import React, { useCallback } from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import { SiX } from "react-icons/si";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => {
  const scrollToSection = useCallback((id) => {
    if (typeof window !== "undefined") {
      const element = document.getElementById(id);
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: 'smooth'
        });
      }
    }
  }, []);

  return (
    <Container>
      <Div1>
        <Link href="/" passHref>
          <div style={{ display: "flex", alignItems: "center", color: "white", cursor: "pointer" }}>
            <Image src="/logo.svg" height={60} width={60} alt="logo" />
            <span style={{ marginLeft: 10, marginTop: 7, fontSize: 30 }}>Akash</span>
          </div>
        </Link>
      </Div1>
      <Div2>
        <li>
          <Link href="#skills" passHref>
            <NavLink onClick={(e) => { e.preventDefault(); scrollToSection('skills'); }}>Skills</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#experience" passHref>
            <NavLink onClick={(e) => { e.preventDefault(); scrollToSection('experience'); }}>Experience</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#projects" passHref>
            <NavLink onClick={(e) => { e.preventDefault(); scrollToSection('projects'); }}>Projects</NavLink>
          </Link>
        </li>
        <li>
          <Link href="#contact" passHref>
            <NavLink onClick={(e) => { e.preventDefault(); scrollToSection('contact'); }}>Contact</NavLink>
          </Link>
        </li>
      </Div2>
      <Div3>
        <SocialIcons href="https://github.com/akash768145s">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://www.linkedin.com/in/akash-sakthimurugan-352b26236/">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://x.com/stackedakash">
          <SiX size="2.5rem" />
        </SocialIcons>
      </Div3>
    </Container>
  );
};

export default Header;
