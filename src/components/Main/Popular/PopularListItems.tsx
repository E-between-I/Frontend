import {
  StyledPopularListItems,
  StyledPopularListItemsText,
  StyledPopularListItemsTitles,
} from "../../../style/Popular/PopularListItems.style";
import { PopularListItem } from "./PopularListItem";

export const PopularListItems = () => {
  return (
    <>
      <StyledPopularListItems>
        <StyledPopularListItemsTitles>
          <StyledPopularListItemsText style={{ flex: 1, textAlign: "left" }}>
            제목
          </StyledPopularListItemsText>
          <StyledPopularListItemsText>글쓴이</StyledPopularListItemsText>
          <StyledPopularListItemsText style={{ width: "90px" }}>
            작성날짜
          </StyledPopularListItemsText>
          <StyledPopularListItemsText style={{ width: "55px" }}>
            좋아요
          </StyledPopularListItemsText>
        </StyledPopularListItemsTitles>
        <PopularListItem
          title="삼전 투자 각?"
          writer="신권호"
          date="24-01-28"
          like={10}
        />
        <PopularListItem
          title="삼전 투자 각?"
          writer="신권호"
          date="24-01-28"
          like={10}
        />
        <PopularListItem
          title="삼전 투자 각?"
          writer="신권호"
          date="24-01-28"
          like={10}
        />
        <PopularListItem
          title="삼전 투자 각?"
          writer="신권호"
          date="24-01-28"
          like={10}
        />
        <PopularListItem
          title="삼전 투자 각?"
          writer="신권호"
          date="24-01-28"
          like={10}
        />
      </StyledPopularListItems>
    </>
  );
};
