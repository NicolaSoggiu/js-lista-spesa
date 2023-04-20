const arrList = [
  "pomodori",
  "funghi",
  "latte",
  "carne",
  "caffè",
  "peperoni",
  "biscotti",
  "pasta",
  "carote",
];

const eleList = document.querySelector("#list");

i = 0;
while (i < arrList.length) {
  console.log(arrList[i]);
  eleList.innerHTML += `<li>${arrList[i]}</li>`;
  i++;
}
