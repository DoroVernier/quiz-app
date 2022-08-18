import { questions } from "./_cardArray.js";

export function card() {
  const container = document.querySelector('[data-js="home"]');

  questions.forEach((question) => {
    const quizCard = document.createElement("section");
    quizCard.classList.add("main__card");
    quizCard.setAttribute("data-js", "card");
    container.append(quizCard);

    const bookMarkButton = document.createElement("button");
    bookMarkButton.classList.add("bookMarkButton");
    bookMarkButton.setAttribute("data-js", "notBookmarked");
    container.append(bookMarkButton);

    const black = document.createElement("img");
    black.classList.add("main__card__icon");
    black.src = "./images/bookmark black.svg";
    bookMarkButton.append(black);

    const bookMarkButtonFav = document.createElement("button");
    bookMarkButtonFav.classList.add("bookMarkButton", "hidden");
    //bookMarkButtonFav.classList.add(hidden);
    bookMarkButton.setAttribute("data-js", "bookmarked");
    container.append(bookMarkButtonFav);

    const pink = document.createElement("img");
    pink.classList.add("main__card__icon");
    pink.src = "./images/bookmark pink.svg";
    bookMarkButtonFav.append(pink);

    const cardQuestion = document.createElement("p");
    cardQuestion.classList.add("main__card__question");
    cardQuestion.setAttribute("data-js", "question");
    container.append(cardQuestion);

    const answerButton = document.createElement("input");
    answerButton.classList.add("main__card_button");
    answerButton.setAttribute("data-js", "button");
    container.append(answerButton);

    const answerText = document.createElement("p");
    answerText.classList.add("main__card__answer", "hidden");
    answerText.setAttribute("data-js", "answer");
    container.append(answerText);

    const tags = document.createElement("section");
    tags.classList.add("tags", "index");
    container.append(tags);

    const tagsList = document.createElement("ul");
    tags.append(tagsList);

    const htmlTag = document.createElement("li");
    tagsList.append(htmlTag);

    const flexTag = document.createElement("li");
    tagsList.append(flexTag);

    const cssTag = document.createElement("li");
    tagsList.append(cssTag);

    const jsTag = document.createElement("li");
    tagsList.append(jsTag);

    const structureTag = document.createElement("li");
    tagsList.append(structureTag);
  });
}
