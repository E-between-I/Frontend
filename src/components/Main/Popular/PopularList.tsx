import {
  StyledPopularList,
  StyledPopularListMore,
  StyledPopularListTitle,
  StyledPopularListTitleSection,
} from "../../../style/Popular/PopularList.style";
import { PopularListItems } from "./PopularListItems";

interface PopularListProps {
  title: string;
}

export const PopularList = ({ title }: PopularListProps) => {
  return (
    <>
      <StyledPopularList>
        <StyledPopularListTitleSection>
          <StyledPopularListTitle>{title}</StyledPopularListTitle>
          <StyledPopularListMore>더보기</StyledPopularListMore>
        </StyledPopularListTitleSection>
        <PopularListItems />
      </StyledPopularList>
    </>
  );
};
