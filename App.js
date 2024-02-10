async function getNews() {
  let url = 'https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews';
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  try {
    let news = await getNews();
    let btn = document.querySelector('#btn');
    function display() {
      showNewsArticles(news);
      alert('It was clicked!');
    }

    btn.addEventListener('click', display);
    
    let bus=document.querySelector("#bus");
    function busData(){
      showNewsArticles(news.filter((user) => user.category == 'Business'));
        alert("Display Bussinnes Related News");
    }
    bus.addEventListener('click',busData);
    
    // setTimeout(() => {
    //   showNewsArticles(users.filter((user) => user.category == 'Politics'));
    // }, 3000);
    let poli=document.querySelector("#poli");
    function poliData(){
      showNewsArticles(news.filter((user) => user.category == 'Politics'));
      alert(" Politics  Related News");
    }
    poli.addEventListener('click',poliData);
    let sport=document.querySelector("#sport");
    function sportData(){
      showNewsArticles(news.filter((user) => user.category == 'Sports'));
      alert(" Sports  Related News");
    }
    sport.addEventListener('click',sportData);
    let hatke=document.querySelector("#hatke");
    function hatkeNews(){
      setTimeout(()=>{
        showNewsArticles(news.filter((user) => user.category == 'Hatke'));
      },5000);
     
      alert(" Hatke  Related News");
    }
    hatke.addEventListener('click',hatkeNews);
    let auto=document.querySelector("#auto");
    function autoData(){
      showNewsArticles(news.filter((user) => user.category == 'Automobile'));
      alert(" Automobile  Related News");
    }
    auto.addEventListener('click',autoData);
    
  } catch (error) {
    console.log(error);
  }
}

renderUsers();

function showNewsArticles(newsList) {
  let html = '';
  newsList.map(user => {
    let htmlSegment = `<div class="user">
                        <div class="detail">
                          <div class="author">
                            <p>BY <b>${user.author}</b></p>
                          </div>
                          <div class="category">
                            <p>CATEGORY <b>${user.category}</b></p>
                          </div>
                        </div>
                        <p>${user.content} <a href='${user.url}'>READ MORE</a></p>
                      </div>`;
    html += htmlSegment;
  });

  let container = document.querySelector('.newsdisplay');
  container.innerHTML = html;
}
