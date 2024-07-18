import React from "react";
import styled, { keyframes } from "styled-components";
import {SectionText,SectionDivider } from "../../styles/GlobalComponents";
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
  text-align: center; /* Center align text */

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

// Define keyframes for animations
const moveDown = keyframes`
  0% {
    opacity: 1;
    transform: translateY(-30px);
  }
  100% {
    opacity: 1;
    transform: translateY(0px);
  }
`;

// Styled components for elements
const TimelineContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 100px auto;
  background-color: #0f1624;
  padding: 20px;
  border-radius: 8px;
`;

const Container = styled.div`
  padding: 10px;
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
  border-radius: 6px;
  font-size: 15px;
  color: #ffffff;

  @media screen and (max-width: 600px) {
    font-size: 13px;
  }

  small {
    display: block;
    margin-bottom: 10px;
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

const Image = styled.img`
  width: 60px;
  border-radius: 50%;
  margin-right: 10px;
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

// React Component
const Experience = () => (
  <>
    <div
      className="text-center mb-14"
      style={{ marginTop: "20px", marginBottom: "10px" }}
    >
      <SectionTitle main>Experience</SectionTitle>
    </div>
    <SectionText>
    As a web developer, I have honed my front-end skills using React.js and Next.js, enhancing UI/UX and web performance. I have led a frontend team, ensuring code quality and seamless API integration. Additionally, I have contributed to web projects by fixing bugs and implementing new features.
    </SectionText>
    <section>
      <TimelineContainer>
        <Container>
          <TextBox>
            <Image src="images/ak.png" alt="AK Technologies Logo" />
            <h2>AK Technologies</h2>
            <h3>(Role: Web Dev Intern)</h3>
            <small>July 2024-Present</small>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Worked on front-end development using React.js and Next.js.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Implemented responsive designs with HTML, CSS, and JavaScript.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Collaborated with the design team to improve UI/UX.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Assisted in optimizing web performance and SEO.
              </BulletText>
            </BulletPoint>
            <LeftArrow />
          </TextBox>
        </Container>
        <Container>
          <TextBox>
            <Image src="images/dnyx.png" alt="DNYX Logo" />
            <h2>DNYX</h2>
            <h3>(Role: Frontend Team Lead)</h3>
            <small>July 2024-Present</small>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Led the front-end development team for multiple projects.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>Ensured code quality and best practices.</BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Conducted code reviews and mentoring sessions.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Coordinated with back-end developers for API integration.
              </BulletText>
            </BulletPoint>
            <RightArrow />
          </TextBox>
        </Container>
        <Container>
          <TextBox>
            <Image src="images/digenie.png" alt="Digenie Logo" />
            <h2>Digenie</h2>
            <h3>(Role: Web Dev Intern)</h3>
            <small>April 2024-June 2024</small>
            <BulletPoint>
              <Bullet />
              <BulletText>Developed web components using React.js.</BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Participated in daily stand-ups and sprint planning.
              </BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>Fixed bugs and implemented new features.</BulletText>
            </BulletPoint>
            <BulletPoint>
              <Bullet />
              <BulletText>
                Worked closely with senior developers for guidance.
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
