import { formSchema } from "@schema/form";
import { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    const data = JSON.parse(req.body);

    const validate = formSchema.safeParse(data);
    console.log(validate);

    res.status(200).json({ name: "John Doe" });
  }
}
