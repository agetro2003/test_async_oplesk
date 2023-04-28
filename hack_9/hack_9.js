/*
- Mediante la libreria: fetch
- Hacer una petición de tipo: POST
- Endpoint: https://jsonplaceholder.typicode.com/posts
- Return: el total del "response"
*/
const fetch = require('cross-fetch');

async function fnTest() {
  //...
  const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
    method:'POST',
    body: JSON.stringify({"id": 101})
  })
  const res = await response.json()
  return res
}

module.exports = fnTest;