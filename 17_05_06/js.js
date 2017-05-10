

var API_KEY = '5295116-e2a1b3df0beeb9fc52fbbe5d2';



var URL = "https://pixabay.com/api/?key="+API_KEY+"&q="+encodeURIComponent('cat');



$.getJSON(URL, function(data){
    if (parseInt(data.totalHits) > 0)
        $.each(data.hits, function(i, hit){ 

$(":first button").click(function(){


   $("<img>").attr("src",hit.userImageURL).appendTo("#main");});});


})
        
  