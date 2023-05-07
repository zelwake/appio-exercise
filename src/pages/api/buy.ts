import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method == "POST") {
    console.log(req.body);

    return res.status(200).json({ message: "yay" });
  }
  return res.status(405).json({ error: "Method not allowed" });
}
