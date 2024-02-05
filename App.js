async function getUsers() {
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
    let users = await getUsers();
    
    // Assuming the response is an array
    showNewsArticales(users.filter((user)=>user.category== 'Business'));
    setTimeout(()=>{
      showNewsArticales(users.filter((user)=>user.category== 'Politics'))
    },3000)
  }
  catch (error) {
    console.log(error);
  }
}

renderUsers();

function showNewsArticales(newsList){
  let html='';
  newsList.map(user => {
    let htmlSegment = `<div class="user">
                        <div class="detail">

                         <div class="author">
                         <p>BY <b>${user.author}</b></p>
                          </div>
                          <div class="category">
                          <p>CATEGORY <B>${user.category}</B></p>
                        </div>
                        
                        </div>
                          <P>${user.content} <a href='${user.url}'>READ MORE</a></P>
                         
                      </div>`;
    html += htmlSegment;
  });


  let container = document.querySelector('.newsdisplay');
  container.innerHTML = html;
}
