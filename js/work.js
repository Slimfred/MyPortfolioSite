var workProjects = [
  {
    title: "My first website",
    pic: "img/supspeechsol-row.jpg",
    link: "http://supspeechsolfirstsite.bitballoon.com"
  },
  {
    title: "Updated Website",
    pic: "img/supspeechsol-update-row.jpg",
    link: "http://www.superiorspeechsolutions.com/"
  },
  {
    title: "Calculator Design",
    pic: "img/calculator-row-sm.png",
    link: "calculator/index.html"
  },
  {
    title: "Yummy Cookies! web app",
    pic: "img/yummy-cookies-row.png",
    link: "https://yummycookies.herokuapp.com/"
  },
  {
    title: "Ruby - Rock, Paper, Scissors",
    pic: "img/rps-ruby.png",
    link: "https://github.com/Slimfred/RockPaperScissors"
  }
];

for (var i = 0; i < workProjects.length; ++i) {
  $("#projects").append('\
    <div class="col-md-4 col-sm-6 col-xs-12">\
      <a class="work-img" href="' + workProjects[i].link + '" target="_blank">\
        <img class="img-responsive" src="'+ workProjects[i].pic +'" >\
        <span class="info"> ' + workProjects[i].title + ' </span>\
      </a>\
    </div>\
      ');
};


var workPhotos = [
  {
    title: "Veggie Box",
    pic: "img/veggiebox-row.jpg"
  },
  {
    title: "Bamboo",
    pic: "img/bamboo-row.jpg"
  },
  {
    title: "Wild Mushrooms",
    pic: "img/mushrooms-row.jpg"
  },
  {
    title: "Stick Fish",
    pic: "img/stick-fish-row.jpg"
  },
  {
    title: "Pink Morning Glory",
    pic:  "img/mglory-pink-row.jpg"
  },
  {
    title: "Sunset",
    pic: "img/sunset-row.jpg"
  },
  {
    title: "Fern",
    pic: "img/fern-row.jpg"
  },
  {
    title: "Ocean",
    pic: "img/ocean-row.jpg"
  }
];

for (var i = 0; i < workPhotos.length; ++i) {
  $("#photos").append('\
    <div class="col-md-3 col-sm-6 col-xs-12">\
      <span class="work-img">\
        <img class="img-responsive" src="'+ workPhotos[i].pic +'" >\
        <span class="info"> ' + workPhotos[i].title + ' </span>\
      </span>\
    </div>\
      ');
    var images = $("#photos img");
    if(i%2===0) {
      $(images[i]).css("border", "2px solid #8600e6");
    } else {
      $(images[i]).css("border", "2px solid #6bc76b");
    };
};

$(".work-img").mouseenter(function(){
  $(".info", this).show();
}).mouseleave(function(){
  $(".info", this).hide();
});
