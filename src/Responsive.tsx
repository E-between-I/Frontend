import { PropsWithChildren } from "react";
import { useMediaQuery } from "react-responsive";

export const Mobile = ({ children }: PropsWithChildren) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return <>{isMobile && children}</>;
};

export const PC = ({ children }: PropsWithChildren) => {
  const isPc = useMediaQuery({
    query: "(min-width: 769px)",
  });
  return <>{isPc && children}</>;
};
