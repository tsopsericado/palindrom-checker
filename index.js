let clearbtn = document.getElementById("clearbtn");
function checkPal() {
  let str = document.getElementById("input").value;
 
  // remove any non alphanumerique and join the words to form one 
   let splijoint = str.split(" ").join("")
   console.log(splijoint)

  // looping through half of the string
  let isPlandrome = true;
  for (let i = 0; i < splijoint.length / 2; i++) {

    //checking if the first and last string are thesame.
    if (splijoint[i] !== splijoint[splijoint.length - i - 1]) {
      isPlandrome = false;
      break;
    }
  }
  
  // let isPlandrome = true;
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
