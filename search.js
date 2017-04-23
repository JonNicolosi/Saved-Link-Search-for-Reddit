document.getElementById("myInput").addEventListener("keyup", function(){

for(var i = 1; i < document.getElementById("myTableBody").childNodes.length; i++){

  var input = document.getElementById("myInput").value.toUpperCase();
  var text_to_search = document.getElementById("myTableBody").childNodes[i].childNodes[1].innerText.toUpperCase();

  if(text_to_search.search(input) == -1){
    document.getElementById("myTableBody").childNodes[i].style.display = "none";
  }
  else{
    document.getElementById("myTableBody").childNodes[i].style.display = "";
  }

}

});
