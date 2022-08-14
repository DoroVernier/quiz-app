//Hides and shows Answer when clicking the AnswerButton
export function toggleAnswer() {
  const cards = document.querySelectorAll('[data-js="card"]');
  cards.forEach((card) => {
    const button = card.querySelector('[data-js="button"]');
    const answer = card.querySelector("[data-js=answer]");
    button.addEventListener("click", () => {
      answer.classList.toggle("hidden");
    });
  });
}

//Changes text on button from "Show Answer" to "Hide Answer"
export function toggleButton() {
  const buttons = document.querySelectorAll('[data-js="button"]');
  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      if (button.value === "Show Answer") {
        button.value = "Hide Answer";
      } else {
        button.value = "Show Answer";
      }
    });
  });
}
