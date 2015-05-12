$(document).ready(function(){
  // code in here!
    // alert("loaded");
  // get trending giphy data
  	console.log($.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC"))
  	$.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", render);
	
	$("input").keyup(function(e) {
		if(e.which == 13) {
	    	console.log("Pressed Enter") //<= Pressed Enter on the Keyboard submit Search
	    	console.log($.get("http://api.giphy.com/v1/gifs/search?q=" + $(this).val() + "&api_key=dc6zaTOxFJmzC"))
	    	$.get("http://api.giphy.com/v1/gifs/search?q=" + $(this).val() + "&api_key=dc6zaTOxFJmzC", search)
		}
	})

})

function search(giphy){
	$("img").remove();
	render(giphy)
}

function render(giphy){
  var data = giphy.data;
  data.forEach(function(item,i){
    var thumb = item.images.fixed_height.url;
    $("body").append("<img src='" + thumb + "'>"); // mind the single vs. double quotes!
  })  
}