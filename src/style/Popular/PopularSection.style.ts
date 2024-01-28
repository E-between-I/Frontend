import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledPopularSection = styled.section`
  width: 100%;
  display: flex;
  align-items: center;
  flex-flow: column;
`;
export const StyledPopular = styled.div`
  width: 1100px;
  display: flex;
  justify-content: space-between;
  padding: 40px 20px;
  gap: 30px;
`;

export const StyledPopularContainer = styled.div<{ $reverse?: boolean }>`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${({ $reverse }) => ($reverse ? "#f9f9f9" : "")};
  ${StyledPopular} {
    flex-direction: ${({ $reverse }) => ($reverse ? "row-reverse" : "")};
  }
`;
export const StyledPopularSectionSlogan = styled(motion.div)`
  display: flex;
  flex-flow: column;
  justify-content: center;
`;

export const StyledPopularSectionSloganText = styled.p`
  font-size: 24px;
  font-weight: 600;
`;
