/*
- Mediante la libreria: axios
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: "response" global de la petición 
*/

const axios = require("axios");


async function fnTest() {
  //...
  const response = await axios.post('https://jsonplaceholder.typicode.com/posts', {"id":101})
  return response;
}

module.exports = fnTest;