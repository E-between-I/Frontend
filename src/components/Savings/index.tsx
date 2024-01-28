import { SavingsTable } from "./SavingsTables";
import Banner from "../../assets/banner.svg";
import Pagination from "../common/Pagination";
import * as S from "../Stock/style";
import { Link } from "react-router-dom";
import QuestionButtonComponent from "../common/Button/question";
import { motion } from "framer-motion";

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
        <motion.img
          src={Banner}
          alt="error"
          style={{ marginBottom: "15px" }}
          initial={{ opacity: 0, y: "20%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.8 }}
        />
        <motion.div
          initial={{ opacity: 0, y: "10%" }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ ease: "easeInOut", duration: 0.4, delay: 0.4 }}
        >
          <S.Title>적금/예금</S.Title>
          <SavingsTable />
          <Pagination
            page={initialPage}
            totalPosts={totalPosts}
            limit={limit}
            setPage={handlePageChange}
          />
          <Link to="/write/savings">
            <QuestionButtonComponent />
          </Link>
        </motion.div>
      </S.StockWrapper>
    </S.StockContainer>
  );
};

export default Savings;
