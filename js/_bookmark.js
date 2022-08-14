export default function toggleBookmark() {
  const cards = document.querySelectorAll("[data-js='card']");
  cards.forEach((card) => {
    const notBookmarked = card.querySelector("[data-js=notBookmarked]");
    const bookmarked = card.querySelector("[data-js=bookmarked]");

    notBookmarked.addEventListener("click", () => {
      notBookmarked.classList.toggle("hidden");
      bookmarked.classList.toggle("hidden");
    });
    bookmarked.addEventListener("click", () => {
      bookmarked.classList.toggle("hidden");
      notBookmarked.classList.toggle("hidden");
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
