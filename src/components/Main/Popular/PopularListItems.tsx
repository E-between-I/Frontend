import { useEffect, useState } from "react";
import {
  StyledPopularListItems,
  StyledPopularListItemsText,
  StyledPopularListItemsTitles,
} from "../../../style/Popular/PopularListItems.style";
import { PopularListItem } from "./PopularListItem";
import axios from "axios";

interface PopularListItemsProps {
  path: string;
}

interface fetchData {
  title: string;
  date: {
    $date: string;
  };
  author: string;
  like: number;
  _id: {
    $oid: string;
  };
}

export const PopularListItems = ({ path }: PopularListItemsProps) => {
  const [data, setData] = useState([]);
  const baseUrl = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        `${baseUrl}ranking/${path === "stock" ? "stock" : ""}${
          path === "immovables" ? "deposit" : ""
        }${path === "savings" ? "realty" : ""}${
          path === "economy" ? "common" : ""
        }`,
        {
          headers: { Accept: "application/json" },
        }
      );
      response.data.forEach((element: fetchData) => {
        const new_responsive: fetchData = element;
        const originalDate = new Date(new_responsive.date.$date);

        const day = originalDate.getDate().toString().padStart(2, "0");
        const month = (originalDate.getMonth() + 1).toString().padStart(2, "0");
        const year = originalDate.getFullYear().toString().slice(2);

        const formattedDateString = `${year}-${month}-${day}`;
        new_responsive.date.$date = formattedDateString;
      });

      console.log(response.data);

      setData(response.data);
    };
    fetchData();
    console.log(data, path, baseUrl);
  }, []);
  return (
    <>
      <StyledPopularListItems>
        <StyledPopularListItemsTitles>
          <StyledPopularListItemsText style={{ flex: 1, textAlign: "left" }}>
            제목
          </StyledPopularListItemsText>
          <StyledPopularListItemsText>글쓴이</StyledPopularListItemsText>
          <StyledPopularListItemsText style={{ width: "90px" }}>
            작성날짜
          </StyledPopularListItemsText>
          <StyledPopularListItemsText style={{ width: "55px" }}>
            좋아요
          </StyledPopularListItemsText>
        </StyledPopularListItemsTitles>
        {data!.map((element: fetchData, idx) => (
          <PopularListItem
            key={idx}
            title={element.title}
            writer={element.author}
            date={element.date.$date}
            like={element.like}
          />
        ))}
      </StyledPopularListItems>
    </>
  );
};
