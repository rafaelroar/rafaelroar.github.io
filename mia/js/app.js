
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
  output.innerHTML = output.innerHTML + "<p><span>You: " + input.value + "</span></p>";
  input.value = "";
}

window.onload = enterAsClick;
