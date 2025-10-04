let input = document.querySelector("input");
let button = document.querySelectorAll("button");
button.forEach(function (dets) {
  dets.addEventListener("click", function (dets) {
    let value = dets.target.innerText;
    if (value === "AC") {
      input.value = "";
    } else if (value === "DE") {
      input.value = input.value.toString().slice(0, -1);
    } else if (value === "=") {
      try {
        input.value = eval(input.value);
      } catch {
        input.value = "Error";
      }
    } else {
      input.value += value;
    }
  });
});
