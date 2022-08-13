// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type UserAccount = {
  email: string;
  password: string;
};

type Response = {};

type ResponseError = {
  code: number;
  message: string;
};

type RequestBody = UserAccount;

const accounts: UserAccount[] = [
  {
    email: "user@test.com",
    password: "mockPassword",
  },
];

const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

const isLoggedIn = (input: UserAccount): boolean => {
  const account = accounts.find(
    (a: UserAccount) => a.email === input.email && a.password === input.password
  );

  return account !== undefined;
};

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
    const loggedIn = isLoggedIn(body);

    if (!loggedIn) {
      res.status(401).json({ code: 401, message: "User not authorized" });
      return;
    }

    res.status(200).json({});
  });
}
