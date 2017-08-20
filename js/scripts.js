function makeActive(item) {
  $(item + '-label').css('fontWeight', 'bold');
  $(item).removeClass('lighten-3');
}

function makeInactive(item) {
  $(item).fadeIn('slow').removeClass('hide');
  jQuery.each($buttons, function(key, val) {
    if(val !== item) {
      $(val).fadeOut('slow').addClass('hide');
      $('#' + key + '-label').css('fontWeight', '');
      $('#' + key).addClass('lighten-3');
    }
  });
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
  $('#intro-section').fadeIn('slow').removeClass('hide');
  $('#work-section').fadeIn('slow').removeClass('hide');
  $(".button-collapse").sideNav();
  $('#current-year').text(moment().format('YYYY'));

  // handle the button clicks only on the index page.
  windowLocation = $(location).attr('pathname');
  if(windowLocation.indexOf('presentations') < 0) {
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

    $buttons = {
      work: "#work-section",
      skills: "#skills-section",
      projects: "#projects-section",
      education: "#education-section"
    };

    jQuery.each($buttons, function(key, val) {
      $('#' + key).click(function() {
        makeActive('#' + key);
        makeInactive(val);
      });
    });

    // paint the experience timeline
    $('#experience-timeline').each(function() {
      $this = $(this); // Store reference to this
      $userContent = $this.children('div'); // user content

      // Create each timeline block
      $userContent.each(function() {
        $(this).addClass('vtimeline-content').wrap('<div class="vtimeline-point"><div class="vtimeline-block"></div></div>');
      });

      // Add icons to each block
      $this.find('.vtimeline-point').each(function() {
        $(this).prepend('<div class="vtimeline-icon"><i class="fa fa-map-marker"></i></div>');
      });

      // Add dates to the timeline if exists
      $this.find('.vtimeline-content').each(function() {
        var date = $(this).data('date');
        if (date) { // Prepend if exists
          $(this).parent().prepend('<span class="vtimeline-date">'+date+'</span>');
        }
      });
    });
  }
}
);
