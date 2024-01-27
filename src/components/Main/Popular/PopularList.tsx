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
      <StyledPopularList>
        <StyledPopularListTitleSection>
          <StyledPopularListTitle>{title}</StyledPopularListTitle>
          <StyledPopularListMore to={`/${path}`}>더보기</StyledPopularListMore>
        </StyledPopularListTitleSection>
        <PopularListItems path={path} />
      </StyledPopularList>
    </>
  );
};
