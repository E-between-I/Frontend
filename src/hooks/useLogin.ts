import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserLogin, userLoginRequestDto } from "../utils/api/Axios";
import { setToken } from "../utils/functions/TokenManager";
import toast from "react-hot-toast";
import axios, { AxiosError } from "axios";

export function useLogin() {
  const [form, setForm] = useState<userLoginRequestDto>({
    username: "",
    password: "",
  });

  const navigate = useNavigate();

  const login = useUserLogin();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  
   const submitLogin = () => {
    login.mutate(form, {
      onSuccess: (e) => {
        setToken(e.data.accessToken, e.data.refreshToken);
        toast.success("로그인을 성공하였습니다.");
        navigate("/");
      },
      onError: (err) => {
        if (axios.isAxiosError(err)) {
          const { status } = err.response?.data as AxiosError;
          switch (status) {
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
    })
  };

  return { form, setForm, handleChange,submitLogin };
}
