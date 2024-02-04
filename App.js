
fetch('https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews')
  .then((response) => response.json())
  .then((data) => console.log(data));