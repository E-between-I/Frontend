import {
  StyledPopularList,
  StyledPopularListMore,
  StyledPopularListTitle,
  StyledPopularListTitleSection,
} from "../../../style/Popular/PopularList.style";
import { PopularListItems } from "./PopularListItems";

interface PopularListProps {
  title: string;
  path: string;
}

export const PopularList = ({ title, path }: PopularListProps) => {
  return (
    <>
      <StyledPopularList
        initial={{ opacity: 0, y: "10%" }}
        // animate={{ opacity: 1, y: 0 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ ease: "easeInOut", duration: 0.5 }}
      >
        <StyledPopularListTitleSection>
          <StyledPopularListTitle>{title}</StyledPopularListTitle>
          <StyledPopularListMore to={`/${path}`}>더보기</StyledPopularListMore>
        </StyledPopularListTitleSection>
        <PopularListItems path={path} />
      </StyledPopularList>
    </>
  );
};
