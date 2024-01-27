import styled from "styled-components";
import ProfileIcon from "../../../assets/Profile";
import { useState } from "react";
import MyInfoModal from "./MyInfoModal";

const Profile = () => {
  const [isClick, setIsClick] = useState<boolean>(false);
  const onProfileIconClickHandle = () => {
    setIsClick(!isClick);
  };

  return (
    <Container>
      <ProfileIcon isClick={isClick} onClick={onProfileIconClickHandle} />
      {isClick && <MyInfoModal setIsClick={setIsClick} />}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
`;

export default Profile;
