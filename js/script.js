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

const btnAdd = document.querySelector("#btn-add");
const inputAdd = document.querySelector("#input-add");

btnAdd.addEventListener("click", function () {
  const addText = inputAdd.value.trim();
  if (addText != "") {
    console.log(addText);
    arrList.push(addText);
    console.log(arrList);
    eleList.innerHTML += `<li>${addText}</li>`;
  }
  inputAdd.value = "";
});
