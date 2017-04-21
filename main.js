var table = document.getElementById("myTableBody");

document.getElementById("myBtn").addEventListener("click",function(){
var username = document.getElementById("username").value;
grabAll(25, "");
function grabAll(count, after){
	var init_req = $.ajax({
		url:"https://www.reddit.com/user/"+username+"/saved/.json",
		data:{
			"count":count,
			"after":after
		},
		success:function(result){
		for(i = 0; i < result.data.children.length; i++){
			if(result.data.children[i].data.hasOwnProperty("permalink")){
				var URL = "https://www.reddit.com" + result.data.children[i].data.permalink
			}
			else{
				var URL = result.data.children[i].data.link_permalink;
			}
			var row = table.insertRow(table.rows.length);
			var cell1 = row.insertCell(0);
			var cell2 = row.insertCell(1);
			var cell3 = row.insertCell(2);

			var link = document.createElement('a')
			document.getElementById("myTableBody").childNodes[i+1+(count-25)].childNodes[0].appendChild(link);
			document.getElementById("myTableBody").childNodes[i+1+(count-25)].childNodes[0].childNodes[0].setAttribute("href", URL);
			var img = document.createElement('img');
			img.src= result.data.children[i].data.thumbnail;
			document.getElementById("myTableBody").childNodes[i+1+(count-25)].childNodes[0].childNodes[0].appendChild(img);

			if(result.data.children[i].kind == "t3"){
				cell2.innerHTML = result.data.children[i].data.title;
			}
			else{
				cell2.innerHTML = result.data.children[i].data.body;
			}
			if(result.data.children[i].data.hasOwnProperty('secure_media')) {
				if(result.data.children[i].data.secure_media!=null){
					cell2.innerHTML = result.data.children[i].data.secure_media.oembed.title;
				}
			}
			cell3.innerHTML = result.data.children[i].data.subreddit;

		}


		// if(result.data.after!=null){
		// 	grabAll(count+=25,result.data.after);
		// }
	}});
}


});
