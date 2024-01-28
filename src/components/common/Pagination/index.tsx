import React, { useState } from "react";
import * as P from "./style";

interface PaginationProps {
  page: number;
  totalPosts: number;
  limit: number;
  setPage?: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({
  page,
  totalPosts,
  limit,
  setPage,
}) => {
  const numPages = Math.ceil(totalPosts / limit);
  const [currPage, setCurrPage] = useState(page);
  const firstNum = currPage - (currPage % 5) + 1;
  const lastNum = currPage - (currPage % 5) + 5;

  return (
    <P.PageSection>
      <P.ButtonWrap>
        <P.Button
          onClick={() => {
            setPage!(page - 1);
            setCurrPage(page - 2);
          }}
          disabled={page === 1}
        >
          &lt;
        </P.Button>
        <P.Button
          onClick={() => setPage!(firstNum)}
          aria-current={page === firstNum ? "page" : undefined}
        >
          {firstNum}
        </P.Button>
        {Array(4)
          .fill(0)
          .map((_, i) => {
            if (i <= 2) {
              return (
                <P.Button
                  border="true"
                  key={i + 1}
                  onClick={() => setPage!(firstNum + 1 + i)}
                  aria-current={page === firstNum + 1 + i ? "page" : undefined}
                >
                  {firstNum + 1 + i}
                </P.Button>
              );
            } else if (i >= 3) {
              return (
                <P.Button
                  border="true"
                  key={i + 1}
                  onClick={() => setPage!(lastNum)}
                  aria-current={page === lastNum ? "page" : undefined}
                >
                  {lastNum}
                </P.Button>
              );
            }
          })}
        <P.Button
          onClick={() => {
            setPage!(page + 1);
            setCurrPage(page);
          }}
          disabled={page === numPages}
        >
          &gt;
        </P.Button>
      </P.ButtonWrap>
    </P.PageSection>
  );
};

export default Pagination;
