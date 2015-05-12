$(document).ready(function(){ //load JavaScript after page loads
  // code in here!
    // alert("loaded");
  // get trending giphy data
  	console.log($.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC")) //console.log trending images
  	$.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", render); //get currently trending images
	
	$("input").keyup(function(e) { // keyboard press listener
		if(e.which == 13) { //13 = Enter Key
	    	console.log("Pressed Enter") //<= Pressed Enter on the Keyboard submit Search
	    	console.log($.get("http://api.giphy.com/v1/gifs/search?q=" + $(this).val() + "&api_key=dc6zaTOxFJmzC")) // return data to console to verify that it's working correctly
	    	$.get("http://api.giphy.com/v1/gifs/search?q=" + $(this).val() + "&api_key=dc6zaTOxFJmzC", search) // get data from giphy api, including api key, passing to search function
		}
	})

})

function search(giphy){ // search function
	$("img").remove(); // remove existing img src files
	render(giphy) //callback to render function
}

function render(giphy){ //render function
  var data = giphy.data; // convert giphy json array to variable
  data.forEach(function(item,i){ //iterator callback function
    var thumb = item.images.fixed_height.url; //set variable to each image in iterator
    $("body").append("<img src='" + thumb + "'>"); // generate html code on page
  })  
}