// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";

type Data = {
  msg: string;
};

const sleep = (ms: number): Promise<any> => {
  return new Promise((resolve) => {
    setTimeout(resolve, ms);
  });
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  // let's wait a bit, so we can see it in "action"
  sleep(200).then(() => {
    res.status(200).json({ msg: "👋 from backend" });
  });
}
