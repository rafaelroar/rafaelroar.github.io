
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
  console.log("run beibi 1", input.value);
  if (input.value.length > 0) {
    console.log("run beibi 2", input.value);
    //var i = parseInt(input.value, 10);
    //console.log("parseInt 2", i);
    if (isInt(input.value)) {
      var i = parseInt(input.value, 10);
      if (i % 15 == 0) {
        output.innerHTML = output.innerHTML + `<p class="you"><span>Fizz Buzz</span></p>`;
      } else if (i % 3 == 0) {
        output.innerHTML = output.innerHTML + `<p class="you"><span>Fizz</span></p>`;
      } else if (i % 5 == 0) {
        output.innerHTML = output.innerHTML + `<p class="you"><span>Buzz</span></p>`;
      } else {
        output.innerHTML = output.innerHTML + `<p class="you"><span>` + i + "</span></p>";
      }
    } else {
      output.innerHTML = output.innerHTML + `<p class="you"><span>Not an integer. Please input an integer number.</span></p>`;
    }
    
    runMia(input.value);
    input.value = "";
    window.scrollTo(0, document.body.scrollHeight);
  }
}

function isInt(value) {
  return !isNaN(value) && 
         parseInt(Number(value)) == value && 
         !isNaN(parseInt(value, 10));
}

function runMia(input) {
  console.log("run mia", input);
  // var promise = com.mia.Mia.sayHello(input);
  // promise.then(function(result) {
  //   console.log("mia success", result);
  //   setTimeout(miaPublish(result), 500);
  // }, function(err) {
  //   console.log(err);
  // });
  
  JavaPoly.type("com.mia.Mia")
    .then(function(mia) {
      console.log("java poly", input);
      var promise = mia.sayHello(input);
      promise.then(function(result) {
        console.log("mia success", result);
        setTimeout(miaPublish(result), 500);
      }, function(err) {
        console.log(err);
      });
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
