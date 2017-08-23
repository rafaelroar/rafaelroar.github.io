
function enterAsClick() {
  document.getElementById("input").addEventListener("keyup", function(e) {
    e.preventDefault();
    if (e.keyCode == 13) {
      document.getElementById("button").click();
    }
  });
}

function publish() {
  var output = document.getElementById("output");
  var input = document.getElementById("input");
  if (input.value.length > 0) {
    output.innerHTML = output.innerHTML + `<p class="you"><span>You: ` + input.value + "</span></p>";
    runMia(input.value);
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
}

function runMia(input) {
  console.log("run mia", input);
  var promise = com.mia.Mia.sayHello(input);
  promise.then(function(result) {
    console.log("mia success", result);
    setTimeout(miaPublish(result), 500);
  }, function(err) {
    console.log(err);
  });
  // $.ajax({
  //   type: "POST",
  //   url: "py/mia.py",
  //   data: { param: input },
  //   success: miaCallback
  // });
}

function miaPublish(result) {
  console.log("mia publish", result);
  var output = document.getElementById("output");
  output.innerHTML = output.innerHTML + `<p class="mia"><span>Mia: ` + result + "</span></p>";
  window.scrollTo(0, document.body.scrollHeight);
}

// function miaCallback(response) {
//   setTimeout(miaPublish(response), 1000);
// }

window.onload = enterAsClick();
