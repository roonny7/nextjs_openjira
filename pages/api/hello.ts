// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from 'next'


///esto son los datos que va a regresar, así se le indica 
//en NExt api response <Data>
type Data = {
  ok: boolean;
  message : string;
  method : string;
}

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  res.status(200).json({ 
    ok : true,
    message: 'todo correcto',
    method : req.method || 'no hay método'
   })
}
