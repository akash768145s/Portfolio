import Link from "next/link";
import React from "react";
import {
  AiFillGithub,
  AiFillInstagram,
  AiFillLinkedin,
} from "react-icons/ai";
import {
  Container,
  Div1,
  Div2,
  Div3,
  NavLink,
  SocialIcons,
} from "./HeaderStyles";

const Header = () => (
  <Container>
    <Div1>
      <Link
        href="/"
        style={{ display: "flex", alignItems: "center", color: "white" }}
      >
        <img src="/logo.svg" height={40} width={40} />{" "}
        <span style={{ marginLeft: 10, marginTop: 7, fontSize: 20 }}>
          Akash
        </span>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#skills" legacyBehavior>
          <NavLink>Skills</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#" legacyBehavior>
          <NavLink>Experience</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#projects" legacyBehavior>
          <NavLink>Projects</NavLink>
        </Link>
      </li>

      <li>
        <Link href="#about" legacyBehavior>
          <NavLink>Contact</NavLink>
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
      <SocialIcons href="https://www.instagram.com/akash__2705s">
        <AiFillInstagram size="3rem" />
      </SocialIcons>
    </Div3>
  </Container>
);

export default Header;
