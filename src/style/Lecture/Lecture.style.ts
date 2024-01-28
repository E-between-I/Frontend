import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledLecture = styled(motion.div)`
  width: 300px;
`;

export const StyledLectureImg = styled.img`
  width: 300px;
`;

export const StyledLectureTitle = styled.p`
  font-size: 20px;
  font-weight: 700;
`;

export const StyledLectureWriter = styled.p`
  font-size: 18px;
  color: #0066ff;
  font-weight: 700;
  margin-top: 8px;
`;
