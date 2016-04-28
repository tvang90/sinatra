$(document).ready(function(){
  $(".lightbox-link").click(function(e){
    var link_element = $(e.currentTarget);

    var imageURL = link_element.data("img-url")

    var image = $("#lightbox-pic");

    image.attr("src", imageURL);
    centerImage(image);

    $(".lightbox-background").show();
      
    $(".lightbox-background").click(function(){
      $(".lightbox-background").hide();
    });
  });
});

function centerImage(image) {

  image.load(function(){
    var page_height = $(window).height();
    var image_height = image.height();
    var image_height_offset = ( page_height - image_height) / 2;
  });
}; 

