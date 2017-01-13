// Facebook button
$(function(d, s, id) {
  var js, fjs = d.getElementsByTagName(s)[0];
  if (d.getElementById(id)) return;
  js = d.createElement(s); js.id = id;
  js.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.8";
  fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));

// Google map on Contact Page
function initMap() {
  var myLatLng = {lat: 41.712098, lng: -71.488813};
  var map = new google.maps.Map(document.getElementById('map'), {
    center: myLatLng,
    zoom: 12
  });
  var trafficLayer = new google.maps.TrafficLayer();
  trafficLayer.setMap(map);

  var contentString = "Panera Bread is my office away from home!  It has a quiet atmosphere perfect for meeting with clients and delicious food & drink to keep me going.";
  var infoWindow = new google.maps.InfoWindow({
    content: contentString
  });

  var marker = new google.maps.Marker({
    position: myLatLng,
    map: map,
    title: "My 'Office'"
  });
  marker.addListener("click", function() {
    infoWindow.open(map, marker);
  });
};


$(document).ready(function() {

  // alert("documrnt is ready");

  //Smooth scrolling
  var $root = $('html, body');
    $('.navbar-nav a').click(function() {
        var href = $.attr(this, 'href');
        $root.animate({
            scrollTop: $(href).offset().top
        }, 500, function () {
            window.location.hash = href;
        });
        return false;
    });

  // Stellar parallax effect
  $(".p-section").stellar();

  // Tootltips
  $(function () {
    $("#supspesol").tooltip();
  });
  $(function() {
    $('[data-toggle="tooltip"]').tooltip();
  });

  //input box background color change
  $("#your-name").css("background-color", "#e6d2f9");
  $("#your-phone-number").css("background-color", "#e6d2f9");
  $("#your-email").css("background-color", "#e6d2f9");
  $(".message-box").css("background-color", "#e6d2f9");

  // When submit button clicked hide boxes & display entries
  $("#submit-email-button").on("click", function () {
    var comment = $("#your-name").val();
    $("#visible-comment-name").html(comment);
    $("#your-name").hide();
    return false;
  });

  $("#submit-email-button").on("click", function () {
    var comment = $("#your-phone-number").val();
    $("#visible-comment-phone").html(comment);
    $("#your-phone-number").hide();
    return false;
  });

  $("#submit-email-button").on("click", function () {
    var comment = $("#your-email").val();
    $("#visible-comment-email").html(comment);
    $("#your-email").hide();
    return false;
  });

  $("#submit-email-button").on("click", function() {
    var comment = $(".message-box").val();
    if (comment === "") {
      $(".message-box").css("border", "2px solid red");
    } else {
        var comment = $(".message-box").val();
        $("#visible-comment-message").html(comment);
        $(".message-box").hide();
    }
  });

  $(".message-box").on("keyup", function() {
    // console.log("keyup happened");
    var charCount = $(".message-box").val().length;
    // console.log(charCount);
    $(".char-count").html(charCount);
    if (charCount > 50) {
      $(".char-count").css("color", "red");
    } else {
      $(".char-count").css("color", "black");
    }
  });

  // Work section
  // console.log(workPhotos);
  // console.log(workProjects);
  // console.log(initMap);

});
