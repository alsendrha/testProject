"use client";
import H27Title from "@/components/subTitle/H27Title";
import TopBanner from "@/components/topBanner/TopBanner";
import { useToken } from "@/store/tokenStore";
import { useRouter, useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import { postLogin } from "./_api";
import LoginButton from "./_components/LoginButton";
import LoginForm from "./_components/LoginForm";
import LoginModal from "./_components/loginModal/LoginModal";
import NotUserContent from "./_components/NotUserContent";
import SocialLogin from "./_components/SocialLogin";

const LoginContent = () => {
  const params = useSearchParams();
  const [modalOpen, setModalOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const { setToken } = useToken();
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });
  const code = params.get("code");
  const navigate = useRouter();

  const userLogin = async () => {
    console.log(loginData);
  };

  const kakaoLogin = async () => {
    setIsLoading(true);
    const login = await postLogin({ code: code!, socialType: "kakao" });
    if (login) {
      setToken(login.headers["authorization"]);
      localStorage.setItem("token", login.headers["authorization"]);
      localStorage.setItem("refreshToken", login.headers["refresh-token"]);
      navigate.push("/");
    }
  };

  useEffect(() => {
    if (code) {
      console.log("code", code);
      kakaoLogin();
    }
  }, [code]);

  if (isLoading) return <div className="pt-[100px] w-full h-full">로딩중</div>;
  console.log("dd", modalOpen);
  return (
    <div className="w-full flex flex-col justify-center items-center">
      {modalOpen && <LoginModal setModalOpen={setModalOpen} />}
      <TopBanner />
      <div className="pt-[200px] flex flex-col w-[562px]">
        <H27Title title="계정에 로그인 하세요" />
        <LoginForm loginData={loginData} setLoginData={setLoginData} />
        <LoginButton onClick={userLogin} />
        <SocialLogin
          loginType="kakao"
          link="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=438cf3e1fed5cae3fa8aba30fd11373c&redirect_uri=http://localhost:3000/login&prompt=login"
          title="카카오 로그인"
        />
        <SocialLogin
          loginType="google"
          link="https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=438cf3e1fed5cae3fa8aba30fd11373c&redirect_uri=http://localhost:3000/login&prompt=login"
          title="구글 로그인"
        />
        <NotUserContent setModalOpen={setModalOpen} />
      </div>
    </div>
  );
};

const Login = () => {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      <LoginContent />
    </Suspense>
  );
};

export default Login;
