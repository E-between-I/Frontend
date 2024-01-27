import { EconomyTable } from "./EconomyTable";
import Banner from "../../assets/banner.svg";
import Pagination from "../common/Pagination";
import * as S from "./style";
import { Link } from "react-router-dom";
import QuestionButtonComponent from "../common/Button/question";

const Economy = () => {
  const totalPosts = 100;
  const limit = 10;
  const initialPage = 1;

  const handlePageChange = (newPage: unknown) => {
    console.log(`Page changed to ${newPage}`);
  };

  return (
    <S.StockContainer>
      <S.StockWrapper>
        <img src={Banner} alt="error" />
        <S.Title>경제</S.Title>
        <EconomyTable />
        <Pagination
          page={initialPage}
          totalPosts={totalPosts}
          limit={limit}
          setPage={handlePageChange}
        />
        <Link to="/write/economy">
          <QuestionButtonComponent />
        </Link>
      </S.StockWrapper>
    </S.StockContainer>
  );
};

export default Economy;
