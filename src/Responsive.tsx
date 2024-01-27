import { PropsWithChildren } from "react";
import { useMediaQuery } from "react-responsive";

// Component에서 반응형을 사용할때 <Mobile>{children}</Mobile> children은 Mobile화면 일때만 보이고
// <PC>{children}</PC> children은 PC(Desktop)화면 일때만 보임

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
