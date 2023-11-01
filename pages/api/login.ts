import type { NextApiRequest, NextApiResponse } from "next";
import crypto from "crypto";

// fake login
export default (req: NextApiRequest, res: NextApiResponse) => {
  const request = req.body;
  const email = request.email;
  const password = Buffer.from(request.password);

  const dbEmail = "johndoe@mail.com";
  const dbPassword = Buffer.from("ecommerce");

  if (email === dbEmail && crypto.timingSafeEqual(password, dbPassword)) {
    res.status(200).json({ status: true });
  } else {
    res.status(401).json({ status: false });
  }
};
