import { http, HttpResponse } from "msw";

type UserInfo = {
  id: string;
  password: string;
  name: string;
  phone: string;
  email: string;
  birthday: string;
};

export const handlers = [
  http.get("/hello", () => {
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      try {
        const parsedUserInfo: UserInfo = JSON.parse(userInfo);
        return HttpResponse.json<UserInfo>(parsedUserInfo);
      } catch (error) {
        console.error("Failed to parse userInfo from localStorage:", error);
        return HttpResponse.json<UserInfo>(
          {
            id: "",
            password: "",
            name: "",
            phone: "",
            email: "",
            birthday: "",
          },
          { status: 500 } // 적절한 에러 코드 설정
        );
      }
    } else {
      console.warn("No userInfo found in localStorage.");
      // 로컬 스토리지에 데이터가 없는 경우 기본값 반환
      return HttpResponse.json<UserInfo>(
        {
          id: "",
          password: "",
          name: "",
          phone: "",
          email: "",
          birthday: "",
        },
        { status: 404 } // 적절한 에러 코드 설정
      );
    }
  }),

  http.post("/signup", async ({ request }) => {
    const newPost = await request.json();
    localStorage.setItem("userInfo", JSON.stringify(newPost));
    return HttpResponse.json(newPost, { status: 201 });
  }),
];
