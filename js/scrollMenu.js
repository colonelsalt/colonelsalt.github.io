$(function() {

    adjustLayout();
    
    function adjustLayout() {
        // If screen is small
        if (window.matchMedia('screen and (max-width: 768px)').matches) {
           $('#collapseMenu').removeClass('affix');
           $('#collapseMenu').addClass('collapse');
           $('#collapseMenu').addClass('navbar-collapse');
           $('.navbar').addClass('navbar-fixed-top');
           $('#content').addClass('scrollSpace');
       }
       else {
           $('#collapseMenu').addClass('affix');
           $('#collapseMenu').removeClass('collapse');
           $('#collapseMenu').removeClass('navbar-collapse');
           $('.navbar').removeClass('navbar-fixed-top');
           $('#content').removeClass('scrollSpace');
       }
    }
    
    $(window).resize(adjustLayout);
});

