import { useLocation, useNavigate } from "react-router-dom";
import {
  StyledLecturePage,
  StyledLecturePageContainer,
  StyledLecturePageContent,
  StyledLectureTab,
  StyledLectureTabMenu,
  StyledLectureTitle,
} from "../style/Lecture/LecturePage.style";
import { useEffect } from "react";
import { Lecture } from "../components/Lecture/Lecture";

export const LecturePage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryString = new URLSearchParams(location.search);
  const type = queryString.get("type");
  const stockData = [
    {
      url: "https://cdn.discordapp.com/attachments/1041239050864033822/1200898319417876590/Rectangle_716.png?ex=65c7dab6&is=65b565b6&hm=65313d7c9379662930223bda62bddfeeeeffb8f99614b1acd742c5fe1741f330&",
      title: "왕초보도 할 수 있는 미국주식 투자, 배당금으로 제2의 월급 만들기",
      writer: "미주부",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1041239050864033822/1200898382051430460/Rectangle_717.png?ex=65c7dac5&is=65b565c5&hm=386aa15db0a5e978b3be62b770ba6634a839ecc95283c05565c44aca7c4a598c&",
      title:
        "주식투자대회 2위, 한달수익 1040% 투자자의 돈버는 주식찾는법(주식비법책 제공)",
      writer: "주식트레이더 귤맨",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1041239050864033822/1200898462326194336/Rectangle_718.png?ex=65c7dad9&is=65b565d9&hm=36ccfb6563ce9f0ad19c5b860b2a7fa667f550fbc39405e03a6c6bd17d995c1f&",
      title:
        "주식투자대회 2위, 한달수익 1040% 투자자의 돈버는 주식찾는법(주식비법책 제공)",
      writer: "주식트레이더 귤맨",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1041239050864033822/1200898534736666764/Rectangle_719.png?ex=65c7daea&is=65b565ea&hm=b35f4592901cc24824fa3d3d0dad1008a0d48b70658970757e61140c1889ecde&",
      title:
        "주식투자대회 2위, 한달수익 1040% 투자자의 돈버는 주식찾는법(주식비법책 제공)",
      writer: "주식트레이더 귤맨",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1041239050864033822/1200898601300267189/Rectangle_720.png?ex=65c7dafa&is=65b565fa&hm=eb95d7bf9846f3f1a7457ac5f55ca1c07c9fdb4987b5437672575dd31a253574&",
      title:
        "주식투자대회 2위, 한달수익 1040% 투자자의 돈버는 주식찾는법(주식비법책 제공)",
      writer: "주식트레이더 귤맨",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1041239050864033822/1200898664479076372/Rectangle_721.png?ex=65c7db09&is=65b56609&hm=0abb8eed5c28f0bbb0ebb6b3588089f9385b74a87bf55628731ec14410a64668&",
      title:
        "주식투자대회 2위, 한달수익 1040% 투자자의 돈버는 주식찾는법(주식비법책 제공)",
      writer: "주식트레이더 귤맨",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1041239050864033822/1200898729968943234/Rectangle_722.png?ex=65c7db18&is=65b56618&hm=4b4b42821d55c904fb251740a04eb2238e788e5bd13581e010732533cfde49dd&",
      title:
        "주식투자대회 2위, 한달수익 1040% 투자자의 돈버는 주식찾는법(주식비법책 제공)",
      writer: "주식트레이더 귤맨",
    },
    {
      url: "https://cdn.discordapp.com/attachments/1041239050864033822/1200898781642772601/Rectangle_723.png?ex=65c7db25&is=65b56625&hm=225d583a6c524891541db4375d831a8697d24b7717081ea73c26446fd5a3b8c3&",
      title:
        "주식투자대회 2위, 한달수익 1040% 투자자의 돈버는 주식찾는법(주식비법책 제공)",
      writer: "주식트레이더 귤맨",
    },
  ];
  const handleTabChange = (path: string) => {
    navigate(`/lecture?type=${path}`);
  };
  useEffect(() => {
    console.log(type);
  });
  return (
    <>
      <StyledLecturePage>
        <StyledLecturePageContainer>
          <StyledLectureTitle>강의 안내</StyledLectureTitle>
          <StyledLectureTabMenu>
            <StyledLectureTab
              $isSelected={type === null || type === "stock"}
              onClick={() => {
                handleTabChange("stock");
              }}
            >
              주식 강의
            </StyledLectureTab>
            <StyledLectureTab
              $isSelected={type === "common"}
              onClick={() => {
                handleTabChange("common");
              }}
            >
              경제상식 강의
            </StyledLectureTab>
            <StyledLectureTab
              $isSelected={type === "realty"}
              onClick={() => {
                handleTabChange("realty");
              }}
            >
              부동산 강의
            </StyledLectureTab>
            <StyledLectureTab
              $isSelected={type === "deposit"}
              onClick={() => {
                handleTabChange("deposit");
              }}
            >
              적금/예금 강의
            </StyledLectureTab>
          </StyledLectureTabMenu>
        </StyledLecturePageContainer>
        <StyledLecturePageContent
          $isSelected={type === null || type === "stock"}
        >
          <Lecture data={stockData} />
        </StyledLecturePageContent>
        <StyledLecturePageContent $isSelected={type === "common"}>
          <Lecture data={stockData} />
        </StyledLecturePageContent>
        <StyledLecturePageContent $isSelected={type === "realty"}>
          <Lecture data={stockData} />
        </StyledLecturePageContent>
        <StyledLecturePageContent $isSelected={type === "deposit"}>
          <Lecture data={stockData} />
        </StyledLecturePageContent>
      </StyledLecturePage>
    </>
  );
};
