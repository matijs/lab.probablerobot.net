import type { Config } from '@netlify/functions';
import { v4 as uuidv4 } from 'uuid';

export default function (req: Request) {
  const url = new URL(req.url);
  const params = new URLSearchParams(url.search);

  if (params.has('json')) {
    return Response.json(JSON.stringify(uuidv4()), {
      status: 200,
    });
  }

  return new Response(uuidv4(), {
    status: 200,
  });
}

export const config: Config = {
  path: ['/api/uuid'],
};
