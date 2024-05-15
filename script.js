const form = document.querySelector("form");
const ratingForm = document.querySelector(".rating-form");
const thankyouForm = document.querySelector(".thankyou-form");
const rateEl = document.querySelector(".rating-val");

form.addEventListener("submit", function (e) {
  e.preventDefault();
  const radio = document.querySelector("input[type=radio]:checked").value;
  console.log(radio);
  rateEl.innerHTML = radio;
  ratingForm.classList.add("hide");
  thankyouForm.classList.remove("hide");
});
