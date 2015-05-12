$(document).ready(function(){
  // code in here!
    // alert("loaded");
  // get trending giphy data
  $.get("http://api.giphy.com/v1/gifs/trending?api_key=dc6zaTOxFJmzC", render);
	
	$("input").keypress(function(e) {
	    if(e.which == 13) {
	        alert('You pressed enter!');
	    }
	})

})



function render(giphy){
  var data = giphy.data;
  data.forEach(function(item,i){
    var thumb = item.images.fixed_height.url;
    $("body").append("<img src='" + thumb + "'>"); // mind the single vs. double quotes!
  })  
}