//This is a sample JavaScript
var btn = document.createElement("button");
btn.innerHTML = "Click";
btn.onclick = function(){ alert(document.title);  };

document.addEventListener("DOMContentLoaded", function(){
  document.body.append(btn);
});
