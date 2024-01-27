import { useEffect} from "react";
// import * as S from "./style";
import { instance } from "../../constraints/axiosIntersepter/userIntersepter";

// interface Post {
//     title: string;
//     author: string;
//     date: string;
//     likes: number;
//   }

export const StockTable = () => {
  // const [posts, setPosts] = useState<Post[]>([]);

  const getStockQuestion = async () => {
    const response = await instance.get(
      `/post/common`
    );
    return response.data;
  };

  useEffect(() => {
    getStockQuestion().catch((res)=>{
      console.log(res);
    });
  }, [])

  return (
    // <S.ConfirmListContainer>
    //   <S.ConfirmListHeader>
    //     <S.ConfirmTitle style={{ width: "90%", paddingLeft: "1%" }}>제목</S.ConfirmTitle>
    //     <S.ConfirmTitle style={{ width: "8%" }}>글쓴이</S.ConfirmTitle>
    //     <S.ConfirmTitle style={{ width: "8%" }}>작성날짜</S.ConfirmTitle>
    //     <S.ConfirmTitle style={{ width: "8%" }}>좋아요</S.ConfirmTitle>
    //   </S.ConfirmListHeader>
    //   {posts.map((item, idx) => (
    //     <S.ConfirmListItemContaienr key={idx}>
    //         <S.ConfirmListItem style={{ width: "90%", paddingLeft: "1%" }}>
    //         {item.title && typeof item.title === 'string' ? item.title : 'Unknown Title'}
    //         </S.ConfirmListItem>
    //         <S.ConfirmListItem style={{ width: "8%" }}>
    //         {item.author && typeof item.author === 'string' ? item.author : 'Unknown Author'}
    //         </S.ConfirmListItem>
    //         <S.ConfirmListItem style={{ width: "8%" }}>
    //         {item.date && typeof item.date === 'string' ? item.date : 'Unknown Date'}
    //         </S.ConfirmListItem>
    //         <S.ConfirmListItem style={{ width: "8%" }}>
    //         {item.likes && typeof item.likes === 'number' ? item.likes : 0}
    //         </S.ConfirmListItem>
    //     </S.ConfirmListItemContaienr>
    //   ))}
    // </S.ConfirmListContainer>
    <>sfsdfs</>
  );
};
