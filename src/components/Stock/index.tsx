import { StockTable } from "./StockTable";
import Banner from "../../assets/banner.svg";
import Pagination from "../common/Pagination";
import * as S from "./style";
import { Link } from "react-router-dom";
import QuestionButtonComponent from "../common/Button/question";

const Stock = () => {
  const totalPosts = 100;
  const limit = 10;
  const initialPage = 1;

  const handlePageChange = (newPage: unknown) => {
    console.log(`Page changed to ${newPage}`);
  };

  return (
    <S.StockContainer>
      <S.StockWrapper>
        <img src={Banner} alt="error" style={{ marginBottom: "15px" }} />
        <S.Title>주식</S.Title>
        <StockTable />
        <Pagination
          page={initialPage}
          totalPosts={totalPosts}
          limit={limit}
          setPage={handlePageChange}
        />
        <Link to="/write/stock">
          <QuestionButtonComponent />
        </Link>
      </S.StockWrapper>
    </S.StockContainer>
  );
};

export default Stock;
