import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";

// Animation for Cards (smooth fade-in effect)
const fadeIn = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  100% { opacity: 1; transform: translateY(0); }
`;

// Main Timeline Container
const TimelineContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 60px auto;
  position: relative;
  max-width: 1200px;
  color: white;
  background: #0f1624; /* Dark background */
  padding: 20px;
  border-radius: 10px;
  width: 100%;

  &:before {
    content: "";
    position: absolute;
    left: 50%;
    top: 0;
    width: 4px;
    height: 100%;
    background: #2f3b52; /* Darker timeline line */
    transform: translateX(-50%);
  }

  @media (max-width: 768px) {
    padding: 10px;
  }
`;

// Card Container (updated to smaller, modern cards)
const Container = styled.div`
  position: relative;
  width: 70%; /* Smaller card width */
  margin-bottom: 40px;
  animation: ${fadeIn} 1s ease-out forwards;
  opacity: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15px;
  background: #1f2a36; /* Dark background for cards */
  border-radius: 15px;
  box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2); /* Soft shadow for modern effect */

  &:nth-child(1) {
    animation-delay: 0.5s;
  }

  &:nth-child(2) {
    animation-delay: 1s;
  }

  &:nth-child(3) {
    animation-delay: 1.5s;
  }

  .timeline-icon {
    position: absolute;
    left: 50%;
    top: -35px;
    width: 70px; /* Smaller icon size */
    height: 70px;
    background: #4f537b;
    border-radius: 50%;
    text-align: center;
    font-size: 2rem;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    transform: translateX(-50%);
    border: 4px solid white;
  }

  .timeline-body {
    background: #283349; /* Lighter blue for the card body */
    border-radius: 10px;
    padding: 20px;
    width: 100%;
    margin-top: 40px; /* Increased spacing for modern separation */
    text-align: center;

    .timeline-title {
      font-weight: 700;
      font-size: 22px;
      color: #fff;
      margin-bottom: 10px;
    }

    .timeline-subtitle {
      font-size: 14px;
      font-style: italic;
      color: #a8a8a8;
      margin-bottom: 12px;
    }

    p {
      font-size: 15px;
      color: #dcdcdc;
      line-height: 1.5;
    }
  }

  @media (max-width: 768px) {
    width: 90%; /* Make cards take up more space on mobile */
    padding: 10px;
    margin-bottom: 30px;
  }
`;

// **Updated Bullet Points for Modern UI**
const BulletPoint = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 18px; /* Increased space between bullet points for clarity */
`;

const Bullet = styled.span`
  width: 16px; /* Larger and more visible */
  height: 16px; /* Larger size */
  background-color: #5c6b76; /* Modern muted gray color for the bullets */
  border-radius: 50%;
  margin-right: 15px; /* Increased margin between bullet and text */
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #ffffff; /* Change to white on hover for interactivity */
  }
`;

const BulletText = styled.span`
  flex: 1;
  font-size: 16px;
  color: #b3b3b3; /* Light gray for the text */
  transition: color 0.3s ease;

  &:hover {
    color: #ffffff; /* Change color to white on hover for readability */
  }
`;
const SectionTitle = styled.h2`
  font-weight: 800;
  font-size: ${(props) => (props.main ? "65px" : "56px")};
  line-height: ${(props) => (props.main ? "72px" : "67px")};
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
  padding: ${(props) => (props.main ? "58px 0 16px" : "0")};
  text-align: center;

  @media ${(props) => props.theme.breakpoints.md} {
    font-size: ${(props) => (props.main ? "56px" : "48px")};
    line-height: ${(props) => (props.main ? "56px" : "48px")};
    margin-bottom: 12px;
    padding: ${(props) => (props.main ? "40px 0 12px" : "0")};
  }

  @media ${(props) => props.theme.breakpoints.sm} {
    font-size: ${(props) => (props.main ? "28px" : "32px")};
    line-height: ${(props) => (props.main ? "32px" : "40px")};
    margin-bottom: 8px;
    padding: ${(props) => (props.main ? "16px 0 8px" : "0")};
    max-width: 100%;
  }
`;

// Role and Subtitle Styling to add gap
const RoleSubtitleContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 20px; /* Added gap between role and duration and bullet points */
`;

const RoleText = styled.div`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 5px; /* Gap between role and duration */
`;

const DurationText = styled.div`
  font-size: 14px;
  color: #a8a8a8; /* Lighter color for the duration */
  font-style: italic;
`;

const Experience = () => (
  <>
    <div
      className="text-center mb-14"
      style={{ marginTop: "20px", marginBottom: "10px" }}
    >
      <SectionTitle main id="experience">
        Experience
      </SectionTitle>
    </div>
    <TimelineContainer>
      {/* KaReFo Role */}
      <Container>
        <div className="timeline-icon">
          <Image
            src="/images/karefo.png"
            alt="KaReFo Logo"
            width={70}
            height={70}
          />
        </div>
        <div className="timeline-body">
          <h4 className="timeline-title">KaReFo</h4>
          <RoleSubtitleContainer>
            <RoleText>(Role: Software Developer Intern)</RoleText>
            <DurationText>November 2024-Present</DurationText>
          </RoleSubtitleContainer>
          <BulletPoint>
            <Bullet />
            <BulletText>
              Developing 18 interactive Tamil language learning games using a
              computational approach.
            </BulletText>
          </BulletPoint>
          <BulletPoint>
            <Bullet />
            <BulletText>
              Implementing animations, mascots, and dynamic backgrounds for
              smooth gameplay.
            </BulletText>
          </BulletPoint>
          <BulletPoint>
            <Bullet />
            <BulletText>
              Contributing to an educational initiative for schools across Tamil
              Nadu.
            </BulletText>
          </BulletPoint>
        </div>
      </Container>

      {/* DNYX Role */}
      <Container>
        <div className="timeline-icon">
          <Image
            src="/images/dnyx.png"
            alt="DNYX Logo"
            width={70}
            height={70}
          />
        </div>
        <div className="timeline-body">
          <h4 className="timeline-title">DNYX</h4>
          <RoleSubtitleContainer>
            <RoleText>(Role: Frontend Team Lead)</RoleText>
            <DurationText>July 2024-October 2024</DurationText>
          </RoleSubtitleContainer>
          <BulletPoint>
            <Bullet />
            <BulletText>
              Led frontend projects, mentoring junior developers, and managing
              client deliverables.
            </BulletText>
          </BulletPoint>
          <BulletPoint>
            <Bullet />
            <BulletText>
              Ensured quality control and timely releases by coordinating with
              backend and UI/UX teams.
            </BulletText>
          </BulletPoint>
          <BulletPoint>
            <Bullet />
            <BulletText>
              Enhanced user experience and web performance for large-scale
              applications.
            </BulletText>
          </BulletPoint>
        </div>
      </Container>

      {/* Digenie Role */}
      <Container>
        <div className="timeline-icon">
          <Image
            src="/images/digenie.png"
            alt="Digenie Logo"
            width={70}
            height={70}
          />
        </div>
        <div className="timeline-body">
          <h4 className="timeline-title">Digenie</h4>
          <RoleSubtitleContainer>
            <RoleText>(Role: Web Dev Intern)</RoleText>
            <DurationText>April 2024-June 2024</DurationText>
          </RoleSubtitleContainer>
          <BulletPoint>
            <Bullet />
            <BulletText>
              Developed web applications using Next.js for scalability and
              performance.
            </BulletText>
          </BulletPoint>
          <BulletPoint>
            <Bullet />
            <BulletText>
              Contributed to client projects like Sri Hospitals and Digenie,
              delivered through Netlify, Vercel, and Hostinger.
            </BulletText>
          </BulletPoint>
          <BulletPoint>
            <Bullet />
            <BulletText>
              Created style guides to ensure consistency and maintainability.
            </BulletText>
          </BulletPoint>
        </div>
      </Container>
    </TimelineContainer>
  </>
);

export default Experience;
