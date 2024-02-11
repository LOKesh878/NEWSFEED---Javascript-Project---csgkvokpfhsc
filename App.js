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
      
    }

    btn.addEventListener('click', display);
    
    let bus=document.querySelector("#bus");
    function busData(){
      showNewsArticles(news.filter((user) => user.category == 'Business'));
        
    }
    bus.addEventListener('click',busData);
    
    // setTimeout(() => {
    //   showNewsArticles(users.filter((user) => user.category == 'Politics'));
    // }, 3000);
    let poli=document.querySelector("#poli");
    function poliData(){
      showNewsArticles(news.filter((user) => user.category == 'Politics'));
      
    }
    poli.addEventListener('click',poliData);
    let sport=document.querySelector("#sport");
    function sportData(){
      showNewsArticles(news.filter((user) => user.category == 'Sports'));
      
    }
    sport.addEventListener('click',sportData);
    let hatke=document.querySelector("#hatke");
    function hatkeNews(){
      setTimeout(()=>{
        showNewsArticles(news.filter((user) => user.category == 'Hatke'));
      },5000);
     
     
    }
    hatke.addEventListener('click',hatkeNews);
    let auto=document.querySelector("#auto");
    function autoData(){
      showNewsArticles(news.filter((user) => user.category == 'Automobile'));
      
    }
    auto.addEventListener('click',autoData);

    let science=document.querySelector("#science");
    function scienceData(event){
      showNewsArticles(news.filter((user) => user.category == 'Science'));
      
      event.preventDefault() ;
      const b=document.createElement("p");
       const newContent=document.createTextNode("No data found");
       b.appendChild(newContent);
       const currentDiv=document.querySelector(".newsdisplay1");
       document.body.insertBefore(b,currentDiv);
    }
    science.addEventListener('click',scienceData);

    let tech=document.querySelector("#tech");
    let star=document.querySelector("#star");
    let enter=document.querySelector("#enter");
    let world=document.querySelector("#world");
    function techData(){
      showNewsArticles(news.filter((user) => user.category == 'Technology'));
      
    }
    tech.addEventListener('click',techData);
    function starData(){
      showNewsArticles(news.filter((user) => user.category == 'Startups'));
     
    }
    star.addEventListener('click',starData);
    function enterData(){
      showNewsArticles(news.filter((user) => user.category == 'Entertainment'));
      
    }
    enter.addEventListener('click',enterData);
    function worldData(){
      showNewsArticles(news.filter((user) => user.category == 'International'));
      
    }
    world.addEventListener('click',worldData);


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
                        <div class="content">
                        <div>
                        <p>${user.content} <a href='${user.url}'>READ MORE</a></p>
                        </div>
                        <div>
                        <span id="icon">♡</span>
                        </div>
                       </div>
                      </div>`;
    html += htmlSegment;
  });

  let container = document.querySelector('.newsdisplay');
  container.innerHTML = html;
}
