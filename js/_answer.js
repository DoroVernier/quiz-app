export function toggleAnswer() {
  const cards = document.querySelectorAll('[data-js="card"]');
  cards.forEach((card) => {
    const answerButton = card.querySelector('[data-js="answerButton"]');
    const answer = card.querySelector("[data-js=answer]");
    answerButton.addEventListener("click", () => {
      answer.classList.toggle("hidden");
    });
  });
}
export function toggleButton() {
  const buttons = document.querySelectorAll('[data-js="answerButton"]');
  buttons.forEach((button) => {
    answerButton.addEventListener("click", () => {
      if (anserButton.value === "Show Answer") {
        answerButton.value = "Hide Answer";
      } else {
        answerButton.value = "Show Answer";
      }
    });
  });
}
