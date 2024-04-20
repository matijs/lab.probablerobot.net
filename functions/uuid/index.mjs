import { v4 as uuidv4 } from 'uuid';

export const handler = async () => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'text/plain; charset=UTF-8',
  },
  body: uuidv4(),
});
