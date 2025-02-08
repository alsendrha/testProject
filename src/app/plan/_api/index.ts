import { createClientApi } from "@/shared/api/client-api";

export async function postPlan(postData: any, token: string) {
  console.log("postData", token);

  try {
    const api = createClientApi();
    const response = await api.post(
      "/course",
      {
        courseName: postData.planTitle,
        startDate: postData.startDate,
        endDate: postData.endDate,
        isPublic: true,
      },
      {
        headers: {
          Authorization: token,
        },
      }
    );
    if (response.status === 200) {
      return response.data;
    }
  } catch (error) {
    console.log("error", error);
    throw error;
  }
}
