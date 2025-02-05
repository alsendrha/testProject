import { createClientApi } from "@/shared/api/client-api";

export async function postPlan(postData: any, token: string) {
  try {
    const api = createClientApi();
    const response = await api.post("/course", {
      courseName: postData.planTitle,
      startDate: postData.startDate,
      endDate: postData.endDate,
    }, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (response.status === 200) {
      console.log("response", response);
      return response;
    }
  } catch (error) {
    console.log('error', error);
    throw error;
  }


}

