import React from "react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { SiX } from "react-icons/si";
import { Link } from "../../styles/GlobalComponents";
import { SocialIcons } from "../Header/HeaderStyles";
import {
  CompanyContainer,
  FooterWrapper,
  LinkColumn,
  LinkItem,
  LinkList,
  LinkTitle,
  Slogan,
  SocialContainer,
  SocialIconsContainer,
} from "./FooterStyles";

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Chat</LinkTitle>
          <LinkItem href="https://wa.me/9491386870">WhatsApp</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:sakthimuruganakash@gmail.com">
            Akash SakthiMurugan
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>
            Copyright &copy; {year} <Link href="/">Akash</Link>. All rights
            reserved.
          </Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons href="https://github.com/akash768145s">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://www.linkedin.com/in/akash-sakthimurugan-352b26236/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons href="https://x.com/stackedakash">
            <SiX size="2.5rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;
