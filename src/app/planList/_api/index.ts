import { createClientApi } from "@/shared/api/client-api";

export async function getPlanList(token: string) {
  const api = createClientApi();
  const response = await api.get("/course", {
    headers: {
      Authorization: token,
    },
  });
  if (response.status === 200) {
    return response;
  }
}
