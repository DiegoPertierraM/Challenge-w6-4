import http from 'http';
import url from 'url';
import * as dotenv from 'dotenv';
dotenv.config();

const port = process.env.PORT || 3300;

const server = http.createServer((request, response) => {
  const queryObject = url.parse(request.url as string, true).query;

  const sum = Number(queryObject.number1) + Number(queryObject.number2);
  const sumResult = `${queryObject.number1} + ${queryObject.number2} = ${sum}`;
  console.log(sumResult);

  response.writeHead(200, { 'Content-Type': 'text/html' });
  response.write('Calculadora');
  response.write(`<p>${sumResult}</p>`);
  console.log(queryObject);
  response.end();
});

server.listen(port);
