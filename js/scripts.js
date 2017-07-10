function checkVisible(element) {
  buttons = ['#work', '#skills', '#projects', '#education'];
  jQuery.each(buttons, function(i, val) {
    if($(val + '-section').is(':visible')) {
      makeInactive(val);
      // quit looking for more.
      // at worst n look up time.
      return false;
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

// listen on the document ready event to do our scripting
$(document).ready(function() {
  $(".button-collapse").sideNav();
  $('#current-year').text(moment().format('YYYY'));

  // handle the button clicks only on the index page.
  windowLocation = $(location).attr('pathname');
  if(windowLocation.indexOf('presentations') < 0) {
    // TODO: Improve code with the following idea...
    // buttons = ['#work', '#skills', '#projects', '#education'];
    // jQuery.each(buttons, function(i, btn){
    //   $(btn).click(function(){
    //     console.log($(btn));
    //   });
    // });
    $('#work').click(function() {
      checkVisible($(this));
      $($(this).attr('href')).removeClass('inactive');
      $('#skills-section').addClass('inactive');
      $('#projects-section').addClass('inactive');
      $('#education-section').addClass('inactive');
    });
    $('#skills').click(function() {
      checkVisible($(this));
      $($(this).attr('href')).removeClass('inactive');
      $('#work-section').addClass('inactive');
      $('#projects-section').addClass('inactive');
      $('#education-section').addClass('inactive');
    });
    $('#projects').click(function() {
      checkVisible($(this));
      $($(this).attr('href')).removeClass('inactive');
      $('#work-section').addClass('inactive');
      $('#skills-section').addClass('inactive');
      $('#education-section').addClass('inactive');
    });
    $('#education').click(function() {
      checkVisible($(this));
      $($(this).attr('href')).removeClass('inactive');
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
