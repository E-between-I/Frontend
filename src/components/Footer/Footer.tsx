import { Logo } from "../../assets";
import {
  StyledFooter,
  StyledFooterCopyright,
  StyledFooterLogo,
} from "../../style/Footer/Footer.style";

export const Footer = () => {
  return (
    <>
      <StyledFooter>
        <StyledFooterLogo src={Logo} />
        <StyledFooterCopyright>
          ⓒ 2024. E-Beween-I All rights reserved.
        </StyledFooterCopyright>
      </StyledFooter>
    </>
  );
};
