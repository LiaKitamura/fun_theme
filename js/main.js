$(document).ready(function(){
    
//    alert('jQuery is installed');
    
    var $mobileNav = $('#mobile-nav'),
        $menulink = $mobileNav.find('a#mobile-nav-link'),
        $mobileNavLinks = $('#mobile-nav').find('ul#mobile-nav-list');
    
    $menulink.click(function(event){
        event.preventDefault();
        $mobileNavLinks.slideToggle();
    });
    
    
});

