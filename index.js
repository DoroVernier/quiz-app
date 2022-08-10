const card = document.querySelector('[data-js="card"]');
const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');
//const oldValue = button.value;
//const newValue = "Hide Answer";

button.addEventListener("click", (event) => {
  answer.classList.toggle("hidden");
  //button.value = newValue;
  if (button.value === "Show Answer") {
    button.value = "Hide Answer";
  } else {
    button.value = "Show Answer";
  }
});
