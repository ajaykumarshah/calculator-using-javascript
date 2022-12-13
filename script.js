
function addthis(a) {

  document.getElementById("display").value += a;


}
const numberButtons = document.querySelectorAll('[data-number]')
const operationButtons = document.querySelectorAll('[data-operation]')
numberButtons.forEach((number) => {
  number.addEventListener("click", () => {
    document.getElementById("display").innerText += number.innerText;
  })
})

operationButtons.forEach((operation) => {
  operation.addEventListener("click", () => {
    document.getElementById("display").innerText += operation.innerText;
  })
})

function equal() {
  console.log(document.getElementById("display").innerText);
  let finalvalue = document.getElementById("display").innerText;
  console.log(finalvalue);
  let calculation = eval(finalvalue);
  console.log(calculation);
  document.getElementById("display").innerText = calculation;

}
function clearall() {

  document.getElementById("display").innerText = "";
}
function deletelast() {
  let data = document.getElementById("display").innerText;
  data = data.slice(0, data.length - 1);
  document.getElementById("display").innerText = data;
}