$(function() {
    $(document).scroll(function() {
      var $nav = $(".logoTop");
      $nav.toggleClass('navbar-scrolled', $(this).scrollTop() > $nav.height());
    });
  });
  