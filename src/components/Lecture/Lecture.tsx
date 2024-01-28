import {
  StyledLecture,
  StyledLectureImg,
  StyledLectureWriter,
  StyledLectureTitle,
} from "../../style/Lecture/Lecture.style";

interface LectureProps {
  url: string;
  title: string;
  writer: string;
}

interface LecturesProps {
  data: LectureProps[];
}

const Variants = {
  close: { opacity: 0, y: "10%" },
  open: {
    opacity: 1,
    y: 0,
    transition: {
      staggerChildren: 0.3,
      delayChildren: 0.5,
    },
  },
};
export const Lecture = ({ data }: LecturesProps) => {
  return (
    <>
      {data!.map((element: LectureProps, idx) => (
        <StyledLecture
          key={idx}
          variants={Variants}
          transition={{ ease: "easeInOut" }}
        >
          <StyledLectureImg src={element.url} />
          <StyledLectureTitle>{element.title}</StyledLectureTitle>
          <StyledLectureWriter>{element.writer}</StyledLectureWriter>
        </StyledLecture>
      ))}
    </>
  );
};
