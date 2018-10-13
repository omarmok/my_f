

  // This code dosen't works on Firefox and IE and works on other browesers.
$(document).ready(function () {
    $('.animated-icon1').click(function () {
      $(this).toggleClass('open');
    });
  });

  // Works everywhere
  $(document).ready(function () {

    // Hide/show animation hamburger function
    $('.navbar-toggler').on('click', function () {

      // Take this line to first hamburger animations
      $('.animated-icon1').toggleClass('open');

    });
    $('.carousel').carousel({
        interval: 3000
      });

(function () {
    'use strict'

    if (navigator.userAgent.match(/IEMobile\/10\.0/)) {
      var msViewportStyle = document.createElement('style')
      msViewportStyle.appendChild(
        document.createTextNode(
          '@-ms-viewport{width:auto!important}'
        )
      )
      document.head.appendChild(msViewportStyle)
    }

  }())

  });