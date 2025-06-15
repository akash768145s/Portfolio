import React, { useRef, useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";
import Image from "next/image";

// Enhanced Color Palette
const colors = {
  primary: "#0F1624", // Deep space blue
  secondary: "#162340", // Rich navy blue
  accent: "#3A7CA5", // Softer blue accent
  textPrimary: "#FFFFFF", // Crisp white
  textSecondary: "#B1C5E2", // Soft blue-gray
  background: "#0A1128", // Darker background
  cardBackground: "linear-gradient(145deg, #162340, #0F1624)", // Gradient background
  shadowColor: "rgba(22, 35, 64, 0.5)", // Soft shadow
  timelineLine: "rgba(58, 124, 165, 0.3)" // Soft timeline line color
};

// Advanced Animations
const fadeInUp = keyframes`
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const timelineAnimation = keyframes`
  from {
    height: 0;
    opacity: 0;
  }
  to {
    height: 100%;
    opacity: 1;
  }
`;

// Styled Components
const Section = styled.section`
  padding: 100px 0;
  background: ${colors.background};
  position: relative;
  overflow: hidden;
`;


const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: 56px;
  line-height: 67px;
  width: max-content;
  max-width: 100%;
  background: linear-gradient(
    121.57deg,
    #ffffff 18.77%,
    rgba(255, 255, 255, 0.66) 60.15%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  margin-bottom: 16px;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: 48px;
    line-height: 48px;
    margin-bottom: 12px;
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: 32px;
    line-height: 40px;
    margin-bottom: 8px;
  }
`;


const TimelineContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 0 20px;
  position: relative;

  &::before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: ${colors.timelineLine};
    transform: translateX(-50%);
    z-index: 1;
  }
`;

const TimelineCard = styled.div`
  background: ${colors.cardBackground};
  border-radius: 20px;
  box-shadow: 
    0 15px 35px ${colors.shadowColor},
    0 5px 15px ${colors.shadowColor};
  padding: 2.5rem;
  position: relative;
  margin-bottom: 3rem;
  width: 45%;
  transition: all 0.4s ease;
  border: 2px solid transparent;

  ${props => props.isVisible && css`
    animation: ${fadeInUp} 1s ease-out;
  `}

  &:nth-child(even) {
    align-self: flex-end;
    margin-left: auto;
  }

  &:nth-child(odd) {
    align-self: flex-start;
    margin-right: auto;
  }

  &::before {
    content: '';
    position: absolute;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: ${colors.accent};
    top: 50%;
    transform: translateY(-50%);
    z-index: 2;
  }

  &:nth-child(odd)::before {
    right: -45px;
  }

  &:nth-child(even)::before {
    left: -45px;
  }

  &:hover {
    transform: translateY(-10px);
    border-color: ${colors.accent};
  }
`;

const CompanyLogo = styled.div`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: ${colors.secondary};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 2rem;
  border: 3px solid ${colors.accent};
  overflow: hidden;
  transition: all 0.3s ease;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  ${TimelineCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }
`;

const CompanyName = styled.h3`
  font-size: 2.4rem;
  font-weight: 900;
  color: ${colors.textPrimary};
  text-align: center;
  margin-bottom: 0.5rem;
`;

const RoleTitle = styled.h4`
  font-size: 1.8rem;
  font-weight: 500;
  color: ${colors.textSecondary};
  text-align: center;
  margin-bottom: 1rem;
`;

const Duration = styled.div`
  font-size: 1.4rem;
  font-weight: 300;
  color: ${colors.accent};
  text-align: center;
  margin-bottom: 2rem;
  font-style: italic;
`;

const BulletList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const BulletItem = styled.li`
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
  color: ${colors.textSecondary};
  font-size: 1.4rem;
  line-height: 1.6;
  position: relative;
  padding-left: 20px;

  &::before {
    content: '▹';
    color: ${colors.accent};
    position: absolute;
    left: 0;
    top: 2px;
    font-size: 1.4rem;
  }

  &:hover {
    color: ${colors.textPrimary};
    transform: translateX(5px);
    transition: all 0.3s ease;
  }
`;

const Experience = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        root: null,
        threshold: 0.1
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experiences = [
    {
      company: "KaReFo",
      role: "Software Developer Intern",
      duration: "November 2024 - Present",
      logo: "/images/karefo.png",
      bullets: [
        "Building 19 interactive Tamil games in React.js, integrated into an HTML site with dynamic API-driven data.",
        "Developed score tracking logic with backend API sync and custom installer for deployment.",
        "Designed responsive layouts for all screen sizes and implemented Safari-specific compatibility fixes."
      ]
    },
    {
      company: "DNYX",
      role: "Frontend Team Lead",
      duration: "July 2024 - October 2024",
      logo: "/images/dnyx.png",
      bullets: [
        "Led frontend projects, mentored 12 interns, and managing client deliverables",
        "Ensured quality control and timely releases by coordinating with backend and UI/UX teams",
        "Enhanced user experience and web performance for large-scale applications"
      ]
    },
    {
      company: "Digenie",
      role: "Web Dev Intern",
      duration: "April 2024 - June 2024",
      logo: "/images/digenie.png",
      bullets: [
        "Developed web applications using Next.js for scalability and performance",
        "Contributed to client projects like Sri Hospitals and Digenie",
        "Created style guides to ensure consistency and maintainability"
      ]
    }
  ];

  return (
    <Section id="experience" ref={sectionRef}>
      <SectionTitle>Experience</SectionTitle>
      <TimelineContainer>
        {experiences.map((exp, index) => (
          <TimelineCard
            key={index}
            isVisible={isVisible}
          >
            <CompanyLogo>
              <Image
                src={exp.logo}
                alt={`${exp.company} logo`}
                width={100}
                height={100}
              />
            </CompanyLogo>
            <CompanyName>{exp.company}</CompanyName>
            <RoleTitle>{exp.role}</RoleTitle>
            <Duration>{exp.duration}</Duration>
            <BulletList>
              {exp.bullets.map((bullet, i) => (
                <BulletItem key={i}>{bullet}</BulletItem>
              ))}
            </BulletList>
          </TimelineCard>
        ))}
      </TimelineContainer>
    </Section>
  );
};

export default Experience;
