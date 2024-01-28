import { useNavigate } from "react-router-dom";
import { useMutation } from "react-query";
import axios, { AxiosError } from "axios";
import toast from "react-hot-toast";
import path from "path";
import { setToken } from "../../functions/TokenManager";
import { instance } from "../../../constraints/axiosIntersepter/userIntersepter";

export interface userLoginRequestDto {
  email: string;
  password: string;
  accessToken: string;
  refreshToken: string;
}

export const useUserLogin = (signData: userLoginRequestDto) => {
  const navigate = useNavigate();

  return useMutation(
    async () =>
      axios.post<userLoginRequestDto>(
        `${process.env.VITE_BASE_URL}${path}/token`,
        signData
      ),
    {
      onSuccess: (e) => {
        setToken(e.data.accessToken, e.data.refreshToken);
        toast.success("로그인을 성공하였습니다.");
        navigate("/main");
      },
      onError: (err: AxiosError<AxiosError>) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              toast.error("정보를 다시 확인해주세요.");
              break;
            case 404:
              toast.error("아이디와 비벌번호를 다시 확인해주세요.");
              break;
            default:
              toast.error("개발자에게 문의해주세요.");
          }
        } else toast.error("네트워크 연결 상태를 확인해주세요.");
      },
    }
  );
};

interface UserRegistrationDto {
  username: string;
  email: string;
  password: string;
  nickname: string;
}

export const useUserRegistration = (registrationData: UserRegistrationDto) => {
  const navigate = useNavigate();

  return useMutation(
    async () =>
      axios.post<void>(
        `${process.env.VITE_BASE_URL}${path}/register`,
        registrationData
      ),
    {
      onSuccess: () => {
        toast.success("회원가입이 완료되었습니다. 로그인해주세요.");
        navigate("/login");
      },
      onError: (err: AxiosError<AxiosError>) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              toast.error("입력 정보를 다시 확인해주세요.");
              break;
            case 409:
              toast.error("이미 등록된 이메일 또는 닉네임입니다.");
              break;
            default:
              toast.error("회원가입에 실패했습니다. 개발자에게 문의해주세요.");
          }
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    }
  );
};

interface PostStockDto {
  item_id: string;
  title: string;
  content: string;
  author: string;
  ref_id: string;
}

export const usePostStock = (postData: PostStockDto) => {
  const navigate = useNavigate();

  return useMutation(
    async () =>
      axios.post<void>(
        `${process.env.VITE_BASE_URL}${path}/post/stock`,
        postData
      ),
    {
      onSuccess: () => {
        toast.success("포스트 작성이 완료되었습니다.");
        navigate("/stock");
      },
      onError: (err: AxiosError<AxiosError>) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              toast.error("입력 정보를 다시 확인해주세요.");
              break;
            default:
              toast.error(
                "포스트 작성에 실패했습니다. 개발자에게 문의해주세요."
              );
          }
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    }
  );
};

interface PostRealtytDto {
  request_body: postQuestionQequestBody;
  category: string;
}

interface postQuestionQequestBody {
  title: string;
  content: string;
  author: string;
}

export const usePostQuestion = (request: PostRealtytDto) => {
  const navigate = useNavigate();

  return useMutation(
    async () =>
      instance.post(`/post/${request.category}`, request.request_body),
    {
      onSuccess: () => {  
        toast.success("질문 작성이 완료되었습니다.");
        navigate(`/${request.category}`);
      },
      onError: (err: AxiosError<AxiosError>) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              toast.error("입력 정보를 다시 확인해주세요.");
              break;
            default:
              toast.error("질문 작성에 실패했습니다. 개발자에게 문의해주세요.");
          }
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
        console.log("request url: ", request.category);
      },
    }
  );
};

interface PostDepositDto {
  item_id: string;
  title: string;
  content: string;
  author: string;
  ref_id: string;
}

export const usePostDeposit = (postData: PostDepositDto) => {
  const navigate = useNavigate();

  return useMutation(
    async () =>
      axios.post<void>(
        `${process.env.VITE_BASE_URL}${path}/post/deposit`,
        postData
      ),
    {
      onSuccess: () => {
        toast.success("적금/예금 포스트 작성이 완료되었습니다.");
        navigate("/deposit");
      },
      onError: (err: AxiosError<AxiosError>) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              toast.error("입력 정보를 다시 확인해주세요.");
              break;
            default:
              toast.error(
                "적금/예금 포스트 작성에 실패했습니다. 개발자에게 문의해주세요."
              );
          }
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    }
  );
};

interface PostCommonDto {
  item_id: string;
  title: string;
  content: string;
  author: string;
  ref_id: string;
}

export const usePostCommon = (postData: PostCommonDto) => {
  const navigate = useNavigate();

  return useMutation(
    async () =>
      axios.post<void>(
        `${process.env.VITE_BASE_URL}${path}/post/common`,
        postData
      ),
    {
      onSuccess: () => {
        toast.success("경제 포스트 작성이 완료되었습니다.");
        navigate("/common");
      },
      onError: (err: AxiosError<AxiosError>) => {
        if (err.response) {
          switch (err.response.status) {
            case 400:
              toast.error("입력 정보를 다시 확인해주세요.");
              break;
            default:
              toast.error(
                "경제 포스트 작성에 실패했습니다. 개발자에게 문의해주세요."
              );
          }
        } else {
          toast.error("네트워크 연결 상태를 확인해주세요.");
        }
      },
    }
  );
};
