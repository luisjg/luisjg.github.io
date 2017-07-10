function checkVisible(element) {
  var buttons = ['work', 'skills', 'projects', 'education'];
  jQuery.each(buttons, function(i, val) {
    if($('#' + val + '-section').is(':visible')) {
      makeInactive('#' + val);
    }
  });
  makeActive(element);
}

function makeActive(item) {
  label = '#' + $(item).attr('id') + '-label';
  $(label).css('fontWeight', 'bold');
  $(item).removeClass('lighten-3');
}

function makeInactive(item) {
  label = '#' + $(item).attr('id') + '-label';
  $(label).css('fontWeight', '');
  $(item).addClass('lighten-3');
}

$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('#current-year').text(moment().format('YYYY'));

  // handle the button clicks
  var windowLocation = $(location).attr('pathname');
  if(windowLocation.indexOf('presentations') < 0) {
    $('#work').click(function() {
      checkVisible($(this));
      $('#work-section').removeClass('inactive');
      $('#skills-section').addClass('inactive');
      $('#projects-section').addClass('inactive');
      $('#education-section').addClass('inactive');
    });
    $('#skills').click(function() {
      checkVisible($(this));
      $('#skills-section').removeClass('inactive');
      $('#work-section').addClass('inactive');
      $('#projects-section').addClass('inactive');
      $('#education-section').addClass('inactive');
    });
    $('#projects').click(function() {
      checkVisible($(this));
      $('#projects-section').removeClass('inactive');
      $('#work-section').addClass('inactive');
      $('#skills-section').addClass('inactive');
      $('#education-section').addClass('inactive');
    });
    $('#education').click(function() {
      checkVisible($(this));
      $('#education-section').removeClass('inactive');
      $('#work-section').addClass('inactive');
      $('#projects-section').addClass('inactive');
      $('#skills-section').addClass('inactive');
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
