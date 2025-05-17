import styled from "styled-components";

// Image Styling
export const Img = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
`;

// Grid Container
export const GridContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  gap: 2.5rem;
  padding: 4rem 2rem;
  background: #0f1624;

  @media ${(props) => props.theme.breakpoints.sm} {
    display: flex;
    flex-direction: column;
    gap: 3rem;
    padding: 2rem 1rem;
  }
`;

// Individual Blog Card
export const BlogCard = styled.div`
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid rgba(255, 255, 255, 0.08);
  backdrop-filter: blur(12px);
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(2, 2, 2, 0.35);
  overflow: hidden;
  text-align: left;
  color: #fff;
  transition: transform 0.4s ease, box-shadow 0.4s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 40px rgba(0, 0, 0, 0.5);
  }
`;

// Title Section
export const TitleContent = styled.h4`
  text-align: left;
  padding: 1rem 2rem 0;
  font-size: 1.2rem;
  color: #9cc9e3;
`;

// Header with conditional size
export const HeaderThree = styled.h3`
  padding: 1rem 2rem 0;
  font-size: ${(props) => (props.title ? "3rem" : "2rem")};
  font-weight: 700;
  color: #fefefe;
`;

// Horizontal Line
export const Hr = styled.hr`
  width: 50px;
  height: 3px;
  margin: 1rem 2rem;
  background: #d0bb57;
  border: none;
`;

// Card Description Text
export const CardInfo = styled.p`
  padding: 0 2rem;
  margin-top: 1rem;
  font-size: 1.3rem;
  line-height: 1.8;
  color: #e2e8f0;
`;

// Button/Link List Container
export const UtilityList = styled.ul`
  display: flex;
  justify-content: space-around;
  margin: 2rem 1rem;
  gap: 1rem;
`;

// External Link Button
export const ExternalLinks = styled.a`
  padding: 0.8rem 1.4rem;
  font-size: 1.5rem;
  font-weight: 600;
  color: #fff;
  background: linear-gradient(145deg, #6b3030, #a34c4c);
  border-radius: 12px;
  text-decoration: none;
  transition: all 0.3s ease;

  &:hover {
    background: #ff5555;
    transform: scale(1.05);
  }
`;

// Tag Section
export const TagList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 2rem;
  gap: 0.5rem;
`;

// Individual Tag
export const Tag = styled.li`
  padding: 0.3rem 0.9rem;
  font-size: 1.2rem;
  font-weight: 500;
  border-radius: 8px;
  color: #d8bfbf;
  background: rgba(255, 255, 255, 0.1);
`;
