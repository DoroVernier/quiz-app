export function navigation() {
  const homePage = document.querySelector("[data-js=home");
  const createPage = document.querySelector("[data-js=create");
  const bookmarkPage = document.querySelector("[data-js=bookmarks");
  //const profilePage = document.querySelector('[data-js=profile');

  const homeNav = document.querySelector("[data-js='nav-home']");
  const createNav = document.querySelector("[data-js='nav-create']");
  const bookmarkNav = document.querySelector("[data-js='nav-bookmark']");
  //const profileNav = document.querySelector('[data-js="nav-profile"]');

  const pages = [homePage, createPage, bookmarkPage];

  homeNav.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
      page.classList.remove("current");
    });
    homePage.classList.remove("hidden");
    homePage.classList.add("current");
  });

  createNav.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
      page.classList.remove("current");
    });
    createPage.classList.remove("hidden");
    createPage.classList.add("current");
  });

  bookmarkNav.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
      page.classList.remove(current);
    });
    bookmarkPage.classList.remove("hidden");
    bookmarkPage.classList.add("current");
  });

  /*profileNav.addEventListener("click", () => {
    pages.forEach((page) => { 
      page.classList.add("hidden"); 
      page.classList.remove("current"); 
});
    profilePage.classList.remove("hidden"); 
    profilePage.classList.add("current"); 
});   */
}
