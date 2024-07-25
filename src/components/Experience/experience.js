import React from "react";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import { SectionText, SectionDivider } from "../../styles/GlobalComponents";

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

const moveDown = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

const TimelineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  max-width: 1200px;
  margin: 60px auto;
  background-color: #0f1624;
  padding: 40px 20px;
  border-radius: 8px;
`;

const Container = styled.div`
  padding: 20px;
  width: calc(50% - 20px);
  margin-bottom: 40px;
  position: relative;
  animation: ${moveDown} 1s linear forwards;
  opacity: 0;

  &:nth-child(1) {
    animation-delay: 0s;
  }
  &:nth-child(2) {
    animation-delay: 0.5s;
  }
  &:nth-child(3) {
    animation-delay: 1s;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const TextBox = styled.div`
  padding: 20px;
  background: #1c2333;
  border-radius: 8px;
  font-size: 16px;
  color: #ffffff;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);

  @media screen and (max-width: 600px) {
    font-size: 14px;
  }

  small {
    display: block;
    margin-bottom: 10px;
    color: #a8a8a8;
  }
`;

const BulletPoint = styled.div`
  display: flex;
  align-items: flex-start;
  margin-bottom: 8px;
`;

const Bullet = styled.span`
  width: 8px;
  height: 8px;
  background-color: #ffffff;
  border-radius: 50%;
  margin-right: 10px;
  margin-top: 5px;
`;

const BulletText = styled.span`
  flex: 1;
`;

const Arrow = styled.span`
  height: 0;
  width: 0;
  position: absolute;
  top: 28px;
  z-index: 1;
  border-top: 15px solid transparent;
  border-bottom: 15px solid transparent;
`;

const LeftArrow = styled(Arrow)`
  border-left: 15px solid #1c2333;
  right: -15px;
`;

const RightArrow = styled(Arrow)`
  border-right: 15px solid #1c2333;
  left: -15px;
`;

const ExperienceHeading = styled.h1`
  font-size: 36px;
  font-weight: 700;
  margin-bottom: 20px;
  color: #ffffff;
  text-align: center;
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
    <SectionText
      style={{ textAlign: "center", maxWidth: "800px", margin: "0 auto" }}
    >
      As a web developer, I have honed my front-end skills with React.js and
      Next.js, optimizing UI/UX and web performance. Leading a frontend team, I
      ensured code quality and seamless API integration. Additionally, I
      contributed to web projects by debugging and implementing new features.
    </SectionText>
    <section style={{ marginTop: "40px" }}>
      <TimelineContainer>
        <Container>
          <TextBox>
            <Image
              src="/images/ak.png"
              alt="AK Technologies Logo"
              width={60}
              height={60}
            />
            <h2>Inno3dTech</h2>
            <h3>(Role: Web Dev Intern)</h3>
            <small>July 2024-Present</small>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Currently working on a Project for Inno3dTech team
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Paid Internship with Stipend for the Project
              </BulletText>
            </BulletPoint>
            <LeftArrow />
          </TextBox>
        </Container>
        <Container>
          <TextBox>
            <Image
              src="/images/dnyx.png"
              alt="DNYX Logo"
              width={60}
              height={60}
            />
            <h2>DNYX</h2>
            <h3>(Role: Frontend Team Lead)</h3>
            <small>July 2024-Present</small>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Currently Leading the Frontend Team for multiple client projects
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Mentoring junior developers to enhance their skills and
                effectively contribute to company client projects.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Coordinating with back-end developers and UI/UX Team for Quality
                Projects.
              </BulletText>
            </BulletPoint>
            <RightArrow />
          </TextBox>
        </Container>
        <Container>
          <TextBox>
            <Image
              src="/images/digenie.png"
              alt="Digenie Logo"
              width={60}
              height={60}
            />
            <h2>Digenie</h2>
            <h3>(Role: Web Dev Intern)</h3>
            <small>April 2024-June 2024</small>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Utilized the Next.js framework to build and maintain web
                applications, ensuring high performance and scalability.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Worked on 3 client projects, including Sri Hospitals,Digenie and
                Spice N Oil delivering high-quality websites hosted via Netlify,
                Vercel, and Hostinger.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Created comprehensive style guides for client sites to ensure
                consistency and maintainability.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Received a stipend for the Internship, acknowledging the value
                and impact of my contributions.
              </BulletText>
            </BulletPoint>
            <LeftArrow />
          </TextBox>
        </Container>
      </TimelineContainer>
    </section>
    <SectionDivider colorAlt />
  </>
);

export default Experience;
