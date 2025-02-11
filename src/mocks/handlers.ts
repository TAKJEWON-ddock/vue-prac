import { http, HttpResponse } from "msw";

type UserInfo = {
  id: string;
  password: string;
  name: string;
  phone: string;
  email: string;
  birthday: string;
};

type LoginInfo = {
  id: string;
  password: string;
};

export const handlers = [
  http.post("/signup", async ({ request }) => {
    const newPost = await request.json();
    localStorage.setItem("userInfo", JSON.stringify(newPost));
    return HttpResponse.json(newPost, { status: 200 });
  }),

  http.post("/signin", async ({ request }) => {
    const loginInfo = (await request.json()) as LoginInfo;
    const userInfo = localStorage.getItem("userInfo");

    if (userInfo) {
      try {
        const parsedUserInfo: UserInfo = JSON.parse(userInfo);
        const { id, password } = loginInfo;

        if (id == parsedUserInfo.id && password == parsedUserInfo.password) {
          return HttpResponse.json<UserInfo>(parsedUserInfo, { status: 200 });
        } else {
          return HttpResponse.json(
            { message: "Invalid credentials" },
            { status: 401 }
          );
        }
      } catch (error) {
        return HttpResponse.json(
          { message: "Internal Server Error" },
          { status: 500 }
        );
      }
    } else {
      return HttpResponse.json({ message: "User not found" }, { status: 404 });
    }
  }),
];
