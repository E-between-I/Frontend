import { useNavigate } from "react-router-dom";
import {
  StyledPopularListItem,
  StyledPopularListItemText,
} from "../../../style/Popular/PopularListItem.style";

interface PopularListItemProps {
  title: string;
  writer: string;
  date: string;
  like: number;
  id: string;
  path: string;
}

export const PopularListItem = ({
  title,
  writer,
  date,
  like,
  id,
  path,
}: PopularListItemProps) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/${path}/detail/${id}`);
  };

  return (
    <>
      <StyledPopularListItem onClick={handleClick}>
        <StyledPopularListItemText
          style={{
            flex: 1,
            textAlign: "left",
            overflow: "hidden",
            whiteSpace: "nowrap",
            textOverflow: "ellipsis",
            wordBreak: "break-all",
          }}
        >
          {title}
        </StyledPopularListItemText>
        <StyledPopularListItemText>{writer}</StyledPopularListItemText>
        <StyledPopularListItemText style={{ width: "90px" }}>
          {date}
        </StyledPopularListItemText>
        <StyledPopularListItemText style={{ width: "55px" }}>
          {like}
        </StyledPopularListItemText>
      </StyledPopularListItem>
    </>
  );
};
