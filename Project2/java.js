const text1 = document.getElementById("text-1");
const text2 = document.getElementById("text-2");
const text3 = document.getElementById("text-3");

const additional1 = document.getElementById("additional-data-1");
const additional2 = document.getElementById("additional-data-2");
const additional3 = document.getElementById("additional-data-3");

const right_part = document.querySelector(".right-part");
const title = document.getElementsByClassName("title");

const additional = [additional1, additional2, additional3];
const text = [text1, text2, text3];

const additionalData = document.querySelector("#additional-data-1");
const authorName = document.getElementsByClassName("author");

// console.log(text1);
const request = new XMLHttpRequest();
request.open(
  "GET",
  "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=Gx0zXJfX0mCRmO7YG1DMy2SZh5y24sAi"
);

request.onload = function () {
  if (request.status === 200) {
    const data = JSON.parse(request.responseText);

    const array = data.results.filter((key) => key.section == "travel");
    const new_array = array.slice(0, 3);

    new_array.forEach((elem, i) => {
      const par = document.createElement("p");
      const time = document.createElement("span");
      const select = document.createElement("span");
      const picture = document.createElement("img");
      const title_name = document.createElement("div");

      par.textContent = elem.abstract;
      time.textContent = elem.published_date;
      select.textContent = "Selected for you";
      picture.src = elem.multimedia[1].url;
      title_name.textContent = elem.title;

      text[i].appendChild(par);
      additional[i].appendChild(time);
      additional[i].appendChild(select);
      right_part.appendChild(picture);
      title[i].appendChild(title_name);

      console.log(elem);
      console.log(i);
    });

    const buttons = document.querySelectorAll("button");
    console.log(buttons);

    elem.forEach((elem, index) => {
      buttons[index].addEventListener("click", () => {
        const url = elem.url;
        window.open(url);
      });
    });
  }
};

request.send();
