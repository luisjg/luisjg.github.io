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

// listen on the document ready event to do our scripting
$(document).ready(function() {
  $(".button-collapse").sideNav();
  $("#current-year").text(moment().format("YYYY"));

  // handle the button clicks only on the index page.
  windowLocation = $(location).attr("pathname");
  if(windowLocation.indexOf("presentations") < 0) {
    if(sessionStorage.getItem('projects') == null) {
      $.ajax({
        url: 'http://luisjg.io/json/projects.json',
        dataType: 'json',
      }).done(function(data) {
        sessionStorage.setItem('projects', JSON.stringify(data));
      });
    }

    $("#intro-section").fadeIn("slow").removeClass("hide");
    $("#work-section").fadeIn("slow").removeClass("hide");
    userAgent = navigator.userAgent;
    mac     = "Macintosh";
    windows = "Windows";
    if(userAgent.indexOf(mac) || userAgent.indexOf(windows)) {
      $(".card-title").click(function(e) {
        e.preventDefault();
        retrievedObject = sessionStorage.getItem('projects');
        jsonObject = JSON.parse(retrievedObject);
        id = $(this).attr("id");
        link = $(this).attr("href");
        $(".modal-content > h4").text($(this).text() + " Application");
        if(id === "aa2") {
          content = jsonObject.aa2;
        } else if(id === "faculty") {
          content = jsonObject.faculty;
        } else if(id === "helix") {
          content = jsonObject.helix;
        } else {
          content = jsonObject.mom;
          $(".modal-content > h4").text($(this).text() + " Website");
        }
        $(".modal-content > p").html(content);
        $(".modal-footer > a").attr("href", link).attr("target", "_blank").text("Visit " + $(this).text());
        $(this).addClass("modal-trigger");
        $(this).attr("href", "#project-modal");
        $($(this).attr("href")).modal();
      });
    }

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
