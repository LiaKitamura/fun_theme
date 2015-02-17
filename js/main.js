$(document).ready(function () {
  // alert('jQuery is installed');

  // caching so we can keep using. the $ in front of mobileNav is just to tell me its a jQuery element
  var $mobileNav = $('#mobile-nav'),
      $menuLink = $mobileNav.find('a#mobile-nav-link'),
      $mobileNavLink = $('#mobile-nav').find('ul#mobile-nav-list');

  $menuLink.click(function(event){
    event.preventDefault();
    $mobileNavLink.slideToggle();
  });

});
