"use client";
import { createClientApi } from "@/shared/api/client-api";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import React, { useEffect } from "react";

const page = () => {
  const params = useSearchParams();
  const code = params.get("code");
  const navigate = useRouter();
  const kakaoLogin = async () => {
    const api = createClientApi();
    try {
      const response = await api.post("/oauth/token", {
        authorizationCode: code,
        socialType: "kakao",
      });
      console.log(response);
      if (response.status === 200) {
        navigate.push("/main");
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (code) {
      kakaoLogin();
    }
  }, [code]);
  return <div className="pt-[100px] flex justify-center items-center h-[500px]">
    <Link href={'https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=438cf3e1fed5cae3fa8aba30fd11373c&redirect_uri=http://localhost:3000/login&prompt=login'} className="w-[100px] h-[50px] rounded-xl border flex justify-center items-center">버튼</Link>
  </div>;
};

export default page;
