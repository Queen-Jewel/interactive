const rates = document.querySelectorAll(".span");
const button = document.querySelector(".btn");

button.addEventListener("click", (e) => {
  let url = "./index2.html";
  window.location.href = url;
});

rates.forEach((rate) => {
  rate.addEventListener("click", () => {
    const rateValue = rate.innerText;

    if (!rate.dataset.clicked) {
      rate.style.background = "Orange";
      rate.style.color = "White";
      rate.innerText = rateValue;
      window.sessionStorage.setItem("rateValue", rateValue);
    } else {
      rate.removeAttribute("data-clicked");
      rate.removeAttribute("style");
    }
  });
});
