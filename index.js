const links1 = document.querySelectorAll("#btn1");
const links2 = document.querySelectorAll("#btn2");
const links3 = document.querySelectorAll("#btn3");
const links4 = document.querySelectorAll("#btn4");
const links5 = document.querySelectorAll("#btn5");
const links6 = document.querySelectorAll("#btn6");

const arrLinks = [links1, links2, links3, links4, links5, links6];

const btnbox = document.querySelector("#btn__box");

function func(e) {
  if (e.target.id === "btn__box") {
    return;
  }
  for (let i = 0; i < arrLinks.length; i++) {
    for (let j = 0; j < arrLinks[i].length; j++) {
      if (
        arrLinks[i][j].id.slice(-1) === e.target.id.slice(-1) ||
        e.target.id === "all"
      ) {
        arrLinks[i][j].style.display = "block";
      } else {
        arrLinks[i][j].style.display = "none";
      }
    }
  }
}
btnbox.addEventListener("click", func);
console.log(readySites1, pieces2);
