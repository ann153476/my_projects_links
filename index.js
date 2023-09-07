const links1 = document.querySelectorAll("#btn1");
const links2 = document.querySelectorAll("#btn2");
const links3 = document.querySelectorAll("#btn3");
const links4 = document.querySelectorAll("#btn4");
const links5 = document.querySelectorAll("#btn5");

const arrLinks = [links1, links2, links3, links4, links5];

const btnbox = document.querySelector("#btn__box");

// allButton0.addEventListener("click", function () {
//   for (let i = 0; i < links2.length; i++) {
//     links2[i].style.display = "block";
//   }
//   for (let i = 0; i < links1.length; i++) {
//     links1[i].style.display = "block";
//   }
//   for (let i = 0; i < links3.length; i++) {
//     links3[i].style.display = "block";
//   }
//   for (let i = 0; i < links4.length; i++) {
//     links4[i].style.display = "none";
//   }
// });

// const func2 = () => {
//   for (let i = 0; i < links2.length; i++) {
//     links2[i].style.display = "block";
//   }
//   for (let i = 0; i < links1.length; i++) {
//     links1[i].style.display = "none";
//   }
//   for (let i = 0; i < links3.length; i++) {
//     links3[i].style.display = "none";
//   }
//   for (let i = 0; i < links4.length; i++) {
//     links4[i].style.display = "none";
//   }
// };
// pieces2.addEventListener("click", () => {
//   for (let i = 0; i < links2.length; i++) {
//     links2[i].style.display = "block";
//   }
//   for (let i = 0; i < links1.length; i++) {
//     links1[i].style.display = "none";
//   }
//   for (let i = 0; i < links3.length; i++) {
//     links3[i].style.display = "none";
//   }
//   for (let i = 0; i < links4.length; i++) {
//     links4[i].style.display = "none";
//   }
// });
// readySites1.addEventListener("click", () => {
//   for (let i = 0; i < links1.length; i++) {
//     links1[i].style.display = "block";
//   }
//   for (let i = 0; i < links2.length; i++) {
//     links2[i].style.display = "none";
//   }
//   for (let i = 0; i < links3.length; i++) {
//     links3[i].style.display = "none";
//   }
//   for (let i = 0; i < links4.length; i++) {
//     links4[i].style.display = "none";
//   }
// });
// buttons3.addEventListener("click", () => {
//   for (let i = 0; i < links3.length; i++) {
//     links3[i].style.display = "block";
//   }
//   for (let i = 0; i < links2.length; i++) {
//     links2[i].style.display = "none";
//   }
//   for (let i = 0; i < links1.length; i++) {
//     links1[i].style.display = "none";
//   }
//   for (let i = 0; i < links4.length; i++) {
//     links4[i].style.display = "none";
//   }
// });
// frame4.addEventListener("click", () => {
//   for (let i = 0; i < links4.length; i++) {
//     links4[i].style.display = "block";
//   }
//   for (let i = 0; i < links2.length; i++) {
//     links2[i].style.display = "none";
//   }
//   for (let i = 0; i < links1.length; i++) {
//     links1[i].style.display = "none";
//   }
//   for (let i = 0; i < links3.length; i++) {
//     links3[i].style.display = "none";
//   }
// });
function func(e) {
  console.log(e.target.id.slice(-1));
  if (e.target.id === "btn__box") {
    return;
  }

  for (let i = 0; i < arrLinks.length; i++) {
    for (let j = 0; j < arrLinks[i].length; j++) {
      if (
        arrLinks[i][j].id.slice(-1) === e.target.id.slice(-1) ||
        e.target.id === "all"
      ) {
        console.log(e.target.id.slice(-1), "<");
        arrLinks[i][j].style.display = "block";
      } else {
        arrLinks[i][j].style.display = "none";
      }
    }
  }
}
btnbox.addEventListener("click", func);
console.log(readySites1, pieces2);
