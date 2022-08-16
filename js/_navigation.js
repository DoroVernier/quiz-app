export function navigation() {
  const homePage = document.querySelector("[data-js=home");
  const createPage = document.querySelector("[data-js=create");
  const bookmarkPage = document.querySelector("[data-js=bookmarks");
  const profilePage = document.querySelector("[data-js=profile");

  const homeNav = document.querySelector("[data-js='nav-home']");
  const createNav = document.querySelector("[data-js='nav-create']");
  const bookmarkNav = document.querySelector("[data-js='nav-bookmark']");
  const profileNav = document.querySelector('[data-js="nav-profile"]');

  const homeButtonBorder = document.querySelector("[data-js=nav-home]");
  const createButtonBorder = document.querySelector("[data-js=nav-create]");
  const bookmarkButtonBorder = document.querySelector("[data-js=nav-bookmark]");
  const profileButtonBorder = document.querySelector("[data-js=nav-profile]");

  homeNav.addEventListener("click", () => {
    homePage.classList.remove("hidden");
    createPage.classList.add("hidden");
    bookmarkPage.classList.add("hidden");
    profilePage.classList.add("hidden");

    homeButtonBorder.classList.add("current");
    createButtonBorder.classList.remove("current");
    bookmarkButtonBorder.classList.remove("current");
    profileButtonBorder.classList.remove("current");
  });

  createNav.addEventListener("click", () => {
    createPage.classList.remove("hidden");
    homePage.classList.add("hidden");
    bookmarkPage.classList.add("hidden");
    profilePage.classList.add("hidden");

    createButtonBorder.classList.add("current");
    homeButtonBorder.classList.remove("current");
    bookmarkButtonBorder.classList.remove("current");
    profileButtonBorder.classList.remove("current");
  });

  bookmarkNav.addEventListener("click", () => {
    bookmarkPage.classList.remove("hidden");
    createPage.classList.add("hidden");
    homePage.classList.add("hidden");
    profilePage.classList.add("hidden");

    bookmarkButtonBorder.classList.add("current");
    createButtonBorder.classList.remove("current");
    homeButtonBorder.classList.remove("current");
    profileButtonBorder.classList.remove("current");
  });

  profileNav.addEventListener("click", () => {
    profilePage.classList.remove("hidden");
    createPage.classList.add("hidden");
    homePage.classList.add("hidden");
    bookmarkPage.classList.add("hidden");

    profileButtonBorder.classList.add("current");
    bookmarkButtonBorder.classList.remove("current");
    createButtonBorder.classList.remove("current");
    homeButtonBorder.classList.remove("current");
  });

  /* const pages = [homePage, createPage, bookmarkPage, profilePage];

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

  profileNav.addEventListener("click", () => {
    pages.forEach((page) => {
      page.classList.add("hidden");
      page.classList.remove("current");
    });
    profilePage.classList.remove("hidden");
    profilePage.classList.add("current");
  });*/
}
