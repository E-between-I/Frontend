import { SavingsTable } from "./SavingsTables";
import Banner from "../../assets/banner.svg";
import Pagination from "../common/Pagination";
import * as S from "./style";

const Savings = () => {
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
        <S.Title>적금/예금</S.Title>
        <SavingsTable />
        <Pagination
          page={initialPage}
          totalPosts={totalPosts}
          limit={limit}
          setPage={handlePageChange}
        />
      </S.StockWrapper>
    </S.StockContainer>
  );
};

export default Savings;
