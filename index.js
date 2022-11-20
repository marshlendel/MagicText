const magicText = document.querySelector("#magic-text");
const form = document.querySelector("form");
const input = document.querySelector("input");

form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value !== "") {
    const query = input.value;
    input.value = "";

    magicText.classList.toggle("fade");
    magicText.addEventListener("transitionend", function () {
      magicText.innerText = query;
      magicText.classList.remove("fade");
    });
  }
});
