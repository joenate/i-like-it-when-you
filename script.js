var c = 0;

var when = ["listen to Gillian Welch", "turn the radio down", "put on Liz Phair", "lean back in your chair", "turn the dial low", "fall fast asleep in the back of my car", '<iframe width="560" height="315" src="https://www.youtube.com/embed/d5NCuzksTVU?controls=0&autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>'];


$(document).click(function (e) {
  // check for tap
  if (e.button == 0) {


    $("<p>" + when[c] + "</p>").hide().prependTo("#when-you").fadeIn(2000);

    c++;

    // when finished
    if (c == when.length) {

      $("<p>talk down </p>").hide().prependTo("#when-you").fadeIn(2000);

      $("body").css('background', '#97795E');
      $("#g p").css('color', '#fff');

      // disable clicks
      $(document).unbind("click");

    }
  }
});
