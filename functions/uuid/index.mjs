import { v4 as uuidv4 } from 'uuid';

export default async () => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'text/plain; charset=UTF-8',
  },
  body: uuidv4(),
});

export const config = {
  path: ['/api/uuid'],
};
