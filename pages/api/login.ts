// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type UserAccount = {
  name: string;
  email: string;
  password: string;
};

type Response = {
  authorized: boolean;
  userName: string;
};

type ResponseError = {
  code: number;
  message: string;
};

type RequestBody = UserAccount;

const accounts: UserAccount[] = [
  {
    name: "Test User",
    email: "user@test.com",
    password: "mockPassword",
  },
];

const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const getUserAccount = (input: UserAccount): UserAccount | undefined =>
  accounts.find(
    (a: UserAccount) => a.email === input.email && a.password === input.password
  );

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Response | ResponseError>
) {
  if (req.method !== "POST") {
    res.status(405).send({ code: 405, message: "Only POST requests allowed" });
    return;
  }

  // let's wait a bit, so we can see it in "action"
  // on the frontend for this demo...
  sleep(1500).then(() => {
    const body: RequestBody = JSON.parse(req.body);
    const user = getUserAccount(body);

    if (!user) {
      res.status(401).json({ code: 401, message: "User not authorized" });
      return;
    }

    res.status(200).json({ authorized: true, userName: user.name });
  });
}
