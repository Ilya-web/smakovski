import { default as rangeSlider } from "rangeslider-pure";


document.addEventListener("DOMContentLoaded", () => {

  // range input  --------------------------------------------------------
  const slider = document.querySelectorAll('.range-item');

  slider.forEach(rangeItem => {
    const input = rangeItem.querySelector('input[type="range"]');
    const count = rangeItem.querySelector('.range-item_count span');

    rangeSlider.create(input, {
      onInit: function () {
        count.textContent = input.value;
      },
      onSlide: function (value, percent, position) {
        count.textContent = value;
      },
    });
  })
});
