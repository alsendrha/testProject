import { useEffect } from "react";
import { create } from "zustand";

type TokenType = {
  token: string;
  setToken: (token: string) => void;
};

export const useToken = create<TokenType>((set) => ({
  token: "", // 초기값을 빈 문자열로 설정
  setToken: (token: string) => set({ token }),
}));

// localStorage에서 초기 토큰을 불러오는 코드
export const useInitToken = () => {
  const setToken = useToken((state) => state.setToken);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    if (storedToken) {
      setToken(storedToken);
    }
  }, [setToken]);
};