export function toggleBookmark() {
  const cards = document.querySelectorAll("[data-js='card']");
  console.log(cards);
  cards.forEach((card) => {
    const unBookmarked = card.querySelector('[data-js="notBookmarked"]');
    const bookmarked = card.querySelector("[data-js=bookmarked]");
    console.log(unBookmarked);
    unBookmarked.addEventListener("click", () => {
      unBookmarked.classList.add("hidden");
      bookmarked.classList.remove("hidden");
    });
    bookmarked.addEventListener("click", () => {
      bookmarked.classList.add("hidden");
      unBookmarked.classList.remove("hidden");
    });
  });
}

/*export function toggleBookmark() {
  const cards = document.querySelectorAll("[data-js='card']");
  cards.forEach((card) => {
    const bookmarked = card.querySelector("[data-js=bookmarked]");
    const notBookmarked = card.querySelector("[data-js=notBookmarked]");

    bookmarked.addEventListener("click", () => {
      bookmarked.classList.toggle("hidden");
      notBookmarked.classList.toggle("hidden");
    });
    notBookmarked.addEventListener("click", () => {
      notBookmarked.classList.toggle("hidden");
      bookmarked.classList.toggle("hidden");
    });
  });
}*/
