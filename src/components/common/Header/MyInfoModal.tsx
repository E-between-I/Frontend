import styled from "styled-components";
import { Check, ProfileImg } from "../../../assets";
import { Link } from "react-router-dom";

const MyInfoModal = ({
  setIsClick,
}: {
  setIsClick: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const onCloseClickHandle = () => {
    setIsClick(false);
  };

  return (
    <Container>
      <InfoBox>
        <img src={ProfileImg} alt="기본 프로필 이미지입니다." />
        <Texts>
          <div>
            <p>김금융 님</p>
            <img src={Check} alt="이 사용자는 전문가로 인증된 사용자입니다." />
          </div>
          <p>
            <b>국가공인회계사 자격증</b>
            <br /> kimyoujin4242@gmail.com
            <Link to="/authenticate" onClick={onCloseClickHandle}>
              자격증 인증하기
            </Link>
          </p>
        </Texts>
      </InfoBox>
      <div>
        <CloseButton onClick={onCloseClickHandle}>Close</CloseButton>
      </div>
    </Container>
  );
};

const Container = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 25px;
  position: absolute;
  right: 30px;
  top: 80px;
  background: ${({ theme }) => theme.colors.gray100};
  border-radius: 5px;

  > div {
    width: inherit;
    display: flex;
    justify-content: end;
  }
`;

const InfoBox = styled.div`
  display: flex;
  gap: 28px;
  align-items: center;
  > img {
    width: 100px;
  }
`;

const Texts = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;

  > div {
    display: flex;
    align-items: center;
    gap: 8px;
    > img {
      width: 18px;
    }
  }
`;

const CloseButton = styled.button`
  width: 100px;
  height: 50px;
  font-size: 18px;
  line-height: 29px;
  font-weight: 700;
  color: ${({ theme }) => theme.colors.WHITE};
  border: none;
  background: ${({ theme }) => theme.colors.main};
  border-radius: 12px;
`;

export default MyInfoModal;
