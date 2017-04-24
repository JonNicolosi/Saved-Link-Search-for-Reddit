var input = document.getElementById("myInput").value.toUpperCase();

document.getElementById("myInput").addEventListener("keyup", function(){

if(document.getElementById("bytitlecommentbody").childNodes[0].checked || document.getElementById("bysubreddit").childNodes[0].checked){
  for(var i = 1; i < document.getElementById("myTableBody").childNodes.length; i++){

    input = document.getElementById("myInput").value.toUpperCase();
    if(document.getElementById("bytitlecommentbody").childNodes[0].checked){
      var text_to_search = document.getElementById("myTableBody").childNodes[i].childNodes[1].innerText.toUpperCase();
    }
    else{
      var text_to_search = document.getElementById("myTableBody").childNodes[i].childNodes[2].innerText.toUpperCase();
    }


    if(text_to_search.search(input) == -1){

      document.getElementById("myTableBody").childNodes[i].style.display = "none";
    }
    else{

      document.getElementById("myTableBody").childNodes[i].style.display = "";
    }
  }
}

});
