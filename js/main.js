"use strict";
const cardHeader = document.querySelector(".card-img");
const cardTitle = document.querySelector(".card-title");
const cardParagraph = document.querySelector(".card-paragraph");
const authorImg = document.querySelector(".author-img");
const authorName = document.querySelector(".author-name");
const date = document.querySelector(".date");
const animatedBgs = document.querySelectorAll(".animated-bg");
const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'Aug', 'Sept', 'Oct', 'Nov', 'Dec'];

const animatedBgTexts = document.querySelectorAll(".animated-bg-text");
function getData() {
    const currentTime = new Date() ;
    let day = '';
  cardHeader.innerHTML = `<img src="https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2102&q=80" alt="" class=" rounded-top"/>`;
  cardTitle.innerHTML = `Lorem ipsum dolor sit amet  `;
  cardParagraph.innerHTML =`Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore perferendis`
  authorImg.innerHTML =`<img src="https://randomuser.me/api/portraits/men/45.jpg" alt="" class="rounded-circle"/>`
  authorName.innerHTML = ` John Doe`;
  if(currentTime.getDay > 10)
  {
      day = currentTime.getDay()
  }
  else
  {
    day = `0${currentTime.getDay()}`

  }
  date.innerHTML = `${months[currentTime.getMonth()]} ${day}, ${currentTime.getFullYear()} `;
  animatedBgs.forEach(bg=>bg.classList.remove("animated-bg"))
  animatedBgTexts.forEach(bgText=>bgText.classList.remove("animated-bg-text"));

}
setTimeout(getData,2500)