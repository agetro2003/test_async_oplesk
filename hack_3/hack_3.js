/*
- Mediante la libreria: axios
- Hacer una petición de tipo: PUT
- Endpoint: https://jsonplaceholder.typicode.com/posts/1
- Return: "response" global de la petición 
*/
const axios = require("axios");

async function fnTest() {
  //...
  const response = await axios.put('https://jsonplaceholder.typicode.com/posts/1', {"id":1})

  return response;
}

module.exports = fnTest;