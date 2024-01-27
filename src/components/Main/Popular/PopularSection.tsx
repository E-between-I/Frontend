import {
  StyledPopular,
  StyledPopularContainer,
  StyledPopularSection,
  StyledPopularSectionSlogan,
  StyledPopularSectionSloganText,
} from "../../../style/Popular/PopularSection.style";
import { PopularList } from "./PopularList";

export const PopularSection = () => {
  return (
    <>
      <StyledPopularSection>
        <StyledPopularContainer>
          <StyledPopular>
            <PopularList title="인기 주식 글" />
            <StyledPopularSectionSlogan>
              <StyledPopularSectionSloganText>
                주식에 대한 모든 것을 이곳에서
              </StyledPopularSectionSloganText>
              <StyledPopularSectionSloganText>
                혹시 주식이 어려우신가요?
              </StyledPopularSectionSloganText>
              <StyledPopularSectionSloganText>
                금융의 모든 것에서 궁금한 것을 물어보세요!
              </StyledPopularSectionSloganText>
            </StyledPopularSectionSlogan>
          </StyledPopular>
        </StyledPopularContainer>
        <StyledPopularContainer $reverse={true}>
          <StyledPopular>
            <PopularList title="인기 부동산 글" />
            <StyledPopularSectionSlogan>
              <StyledPopularSectionSloganText>
                부동산에 대한 모든 것을 이곳에서
              </StyledPopularSectionSloganText>
              <StyledPopularSectionSloganText>
                내 집 마련 어려운게 너무 많으시죠?
              </StyledPopularSectionSloganText>
              <StyledPopularSectionSloganText>
                금융의 모든 것에서 궁금한 것을 물어보세요!
              </StyledPopularSectionSloganText>
            </StyledPopularSectionSlogan>
          </StyledPopular>
        </StyledPopularContainer>
        <StyledPopularContainer>
          <StyledPopular>
            <PopularList title="인기 적금/예금 글" />
            <StyledPopularSectionSlogan>
              <StyledPopularSectionSloganText>
                적금/예금에 대한 모든것을 이곳에서
              </StyledPopularSectionSloganText>
              <StyledPopularSectionSloganText>
                적금 정책이 너무 어렵지 않으신가요?
              </StyledPopularSectionSloganText>
              <StyledPopularSectionSloganText>
                금융의 모든 것에서 궁금한 것을 물어보세요!
              </StyledPopularSectionSloganText>
            </StyledPopularSectionSlogan>
          </StyledPopular>
        </StyledPopularContainer>
        <StyledPopularContainer $reverse={true}>
          <StyledPopular>
            <PopularList title="인기 경제 글" />
            <StyledPopularSectionSlogan>
              <StyledPopularSectionSloganText>
                경제에 대한 모든 것을 이곳에서
              </StyledPopularSectionSloganText>
              <StyledPopularSectionSloganText>
                경제 어려운 단어도 많고 개념이 복잡하신가요?
              </StyledPopularSectionSloganText>
              <StyledPopularSectionSloganText>
                금융의 모든 것에서 궁금한 것을 물어보세요!
              </StyledPopularSectionSloganText>
            </StyledPopularSectionSlogan>
          </StyledPopular>
        </StyledPopularContainer>
      </StyledPopularSection>
    </>
  );
};
