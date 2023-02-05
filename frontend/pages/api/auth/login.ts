// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'
import axios from 'axios';
import cookie from 'cookie';

type Data = {
  name?: string,
  success?: boolean,
  error?: string
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    if (req.method === "POST"){
        const {username, password} = req.body;

        try {
            const response = await axios.post(process.env.API_URL + '/api/token', {
                username,
                password,
            },
            {
                headers: {
                    "Content-Type": "application/json",
                },
            })
            if (response.data.access){
                res.setHeader("Set-Cookie", [
                    cookie.serialize("access", response.data.access, {
                        httpOnly: true,
                        secure: process.env._NODE_ENV !== "development",
                        maxAge: 60 * 60 * 24 * 15,
                        sameSite: "lax",
                        path: "/"
                    }),
                ]);
                return res.status(200).json({
                    success: true,
                  });
                } else {
                  res.status(response.status).json({
                    error: "Authentication failed",
                  });
                }
              } catch (error) {
                res.status(400).json({error: "Error with login"})
              }
            }
          };