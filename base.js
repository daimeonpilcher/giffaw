$(document).ready(function(){
  // code in here!
    // alert("loaded");
  render(mockData);
})

function render(giphy){
  var data = giphy.data;
  data.forEach(function(item,i){
    var thumb = item.images.fixed_height.url;
    $("body").append("<img src='" + thumb + "'>"); // mind the single vs. double quotes!
  })  
}