import { Link } from "react-router-dom";
import { ImmovablesTable } from "./ImmovablesTable";
import Banner from "../../assets/banner.svg";
import Pagination from "../common/Pagination";
import * as S from "../Stock/style";
import QuestionButtonComponent from "../common/Button/question";

const Immovables = () => {
  const totalPosts = 100;
  const limit = 10;
  const initialPage = 1;

  return (
    <S.StockContainer>
      <S.StockWrapper>
        <img src={Banner} alt="error" style={{ marginBottom: "15px" }} />
        <S.Title>부동산</S.Title>
        <ImmovablesTable />
        <Pagination page={initialPage} totalPosts={totalPosts} limit={limit} />
        <Link to="/write/immovables">
          <QuestionButtonComponent />
        </Link>
      </S.StockWrapper>
    </S.StockContainer>
  );
};

export default Immovables;
