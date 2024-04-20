const uuid = require('uuid');

exports.handler = async () => ({
  statusCode: 200,
  headers: {
    'Content-Type': 'text/plain; charset=UTF-8',
  },
  body: uuid.v4(),
});
