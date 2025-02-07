import { createClientApi } from "@/shared/api/client-api";

type LoginData = {
  code: string;
  socialType: string;
};

export const postLogin = async ({ code, socialType }: LoginData) => {
  try {
    const api = createClientApi();
    const response = await api.post("/oauth/token", {
      authorizationCode: code,
      socialType,
    });

    if (response.status === 200) {
      return response;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
};
