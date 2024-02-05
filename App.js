async function getUsers() {
  let url = 'https://content.newtonschool.co/v1/pr/64e3d1b73321338e9f18e1a1/inshortsnews';
  try {
    let res = await fetch(url);
    let data = await res.json();
    return data; // assuming the response is an array or object containing users
  } catch (error) {
    console.log(error);
  }
}

async function renderUsers() {
  try {
    let users = await getUsers();
    let html = '';
    // Assuming the response is an array
    users.map(user => {
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
  } catch (error) {
    console.log(error);
  }
}

renderUsers();
