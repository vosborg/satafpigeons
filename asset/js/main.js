/*----------HAMBURGER MENU ANIMATION----------*/
$("#toggleMenu").click(function() {
    var navbarElem = $(".navbar-toggler");
    var removeClass = navbarElem.hasClass("collapsed");
  
    if (removeClass) {
      navbarElem.removeClass("collapsed");
    } else {
      navbarElem.addClass("collapsed");
    }
  });
  /*----------HAMBURGER MENU ANIMATION SLUT----------*/

