import Choices from "choices.js/public/assets/scripts/choices.js";

document.addEventListener("DOMContentLoaded", () => {
  // init js-choice selects-----------------------------------------
  const element = document.querySelectorAll(".js-choice");
  const elementNoSearch = document.querySelectorAll(".js-choice-no-search");

  element.forEach((item) => {
    new Choices(item, {
      silent: false,
      searchEnabled: true,
      itemSelectText: "",
      placeholder: true,
    });
  });

  elementNoSearch.forEach((item) => {
    new Choices(item, {
      silent: false,
      searchEnabled: false,
      itemSelectText: "",
      placeholder: true,
    });
  });
});
