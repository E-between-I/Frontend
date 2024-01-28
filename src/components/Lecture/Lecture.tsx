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

export const Lecture = ({ data }: LecturesProps) => {
  return (
    <>
      {data!.map((element: LectureProps, idx) => (
        <StyledLecture key={idx}>
          <StyledLectureImg src={element.url} />
          <StyledLectureTitle>{element.title}</StyledLectureTitle>
          <StyledLectureWriter>{element.writer}</StyledLectureWriter>
        </StyledLecture>
      ))}
    </>
  );
};
