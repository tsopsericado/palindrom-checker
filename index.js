let clearbtn = document.getElementById("clearbtn");
function checkPal() {
  let str = document.getElementById("input").value;
  let element = document.getElementById("btn");
  let strLength = str.length;
  let isPlandrome = true;

  // looping through half of the string

  for (let i = 0; i < strLength / 2; i++) {
    if (str[i] !== str[strLength - i - 1]) {
      isPlandrome = false;
      break;
    }
  }
  let result = document.getElementById("result");
  if (isPlandrome) {
    result.innerHTML = "Yesss, sentence is a plaindrome";
  } else {
    result.innerHTML = "Nooo, sentence is not a plaindrome";
  }
  // adding clear btn
  clearbtn.addEventListener("click", function () {
    input.value = "";
    result.innerHTML = "";
  });
}
