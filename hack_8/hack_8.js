const fetch = require('cross-fetch');

/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: GET
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/

async function fnTest() {
  //...
  const response = await fetch('https://jsonplaceholder.typicode.com/posts')
  const res = await response.json()
  return res.length
}

module.exports = fnTest;