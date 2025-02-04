import { createClientApi } from "@/shared/api/client-api";

export async function postPlan(postData: any, token: string) {
  const api = createClientApi();
  const response = await api.post("/course", {
    courseName: postData.planTitle,
    startDate: postData.startDate,
    endDate: postData.endDate,
  }, {
    headers: {
      "Content-Type": "application/json",
      Authorization: token,
    },
  });
  if (response.status === 201) {
    return response;
  }
}

