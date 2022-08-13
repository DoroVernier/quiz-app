export default function navigation() {
  const homePage = document.querySelector("[data-js=home");
  const createPage = document.querySelector("[data-js=create");
  const bookmarkPage = document.querySelector("[data-js=bookmarks");
  //const profilePage = document.querySelector('[data-js=profile');

  const homeNav = document.querySelector("[nav-home");
  const createNav = document.querySelector("[nav-create");
  const bookmarkNav = document.querySelector("[nav-bookmark");
  //const profileNav = document.querySelector('[nav-profile');

  const pages = [homePage, createPage, bookmarkPage];

  homeNav.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    homePage.classList.remove("hidden");
  });

  createNav.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    createPage.classList.remove("hidden");
  });

  bookmarkNav.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
    });
    bookmarkPage.classList.remove("hidden");
  });

  /*profileNav.addEventListener("click", () => {
    pages.forEach((page) => { page.classList.add("hidden"); 
});
    profilePage.classList.remove("hidden"); 
});   */
}
