function toggleButtons(item) {
  $(".btn-floating").each(function(key, val) {
    if(!$($(this).attr("href")).hasClass("hide")) {
      $(this).addClass("lighten-3");
      $("#" + $(this).parent().children().get(1).id).css("fontWeight", "");
      $($(this).attr("href")).addClass("hide");
    }
  });
  $("#" + (item).parent().children().get(1).id).css("fontWeight", "bold");
  $(item).removeClass("lighten-3");
  $((item).attr("href")).fadeIn("slow").removeClass("hide");
}

function gitHubApi(page) {
  $gitCall++;
  if(typeof page === 'undefined') {
    page='';
  }

  $.ajax({
    url: 'https://api.github.com/users/luisjg/events'+page,
    dataType: 'json',
    }).done(function(data) {
      if(data.length > 0) {
        gitHubApi('?page='+$gitCall);
      }
      jQuery.each(data, function(i, item) {
      if(item.type === 'PushEvent') {
        $gitPushCount++;
      } else if(item.type === 'PullRequestEvent') {
        $gitPrCount++;
      }
    });
  })
}

// listen on the document ready event to do our scripting
$(document).ready(function() {
  $("#intro-section").fadeIn("slow").removeClass("hide");
  $("#work-section").fadeIn("slow").removeClass("hide");
  $(".button-collapse").sideNav();
  $("#current-year").text(moment().format("YYYY"));

  // handle the button clicks only on the index page.
  windowLocation = $(location).attr("pathname");
  if(windowLocation.indexOf("presentations") < 0) {
    // $gitPushCount = 0;
    // $gitPrCount = 0;
    // $gitCall = 1;

    // if(!sessionStorage.getItem('pushes') && !sessionStorage.getItem('prs')) {
    //   gitHubApi();
    // }

    // $(document).ajaxStop(function () {
    //   sessionStorage.setItem('pushes', $gitPushCount);
    //   sessionStorage.setItem('prs', $gitPrCount);
    // });

    // $('#push-count').text(sessionStorage.getItem('pushes'));
    // $('#pr-count').text(sessionStorage.getItem('prs'));
    // $('#git-stats').fadeIn('slow').removeClass('hide');

    $(".btn-floating").click(function(e) {
      e.preventDefault();
      toggleButtons($(this));
    });

    // paint the experience timeline
    $("#experience-timeline").each(function() {
      $this = $(this); // Store reference to this
      $userContent = $this.children("div"); // user content

      // Create each timeline block
      $userContent.each(function() {
        $(this).addClass("vtimeline-content").wrap("<div class=\"vtimeline-point\"><div class=\"vtimeline-block\"></div></div>");
      });

      // Add icons to each block
      $this.find(".vtimeline-point").each(function() {
        $(this).prepend("<div class=\"vtimeline-icon\"><i class=\"fa fa-map-marker\"></i></div>");
      });

      // Add dates to the timeline if exists
      $this.find(".vtimeline-content").each(function() {
        var date = $(this).data("date");
        if (date) { // Prepend if exists
          $(this).parent().prepend("<span class=\"vtimeline-date\">" + date + "</span>");
        }
      });
    });
  }
}
);
