

// FOR NAVBAR FIXED WHEN SCROLL
$(window).on("scroll", function(){
    var scrolling = $(this).scrollTop();
    if (scrolling > 300){
        $(".navbar-part").addClass("navbar-fixed");
    }else{
        $(".navbar-part").removeClass("navbar-fixed");
    }
});


// FOR RIGHT SIDEBAR SHOW & HIDE
$(".cart-icon").on("click", function(){
    $(".right-sidebar").addClass("active");
    $(".right-cross").on('click', function(){
        $(".right-sidebar").removeClass("active");
    });
});


// FOR LEFT SIDEBAR SHOW & HIDE
$(".left-bar, .left-src").on("click", function(){
    $(".left-sidebar").addClass("active");
    $(".left-cross").on('click', function(){
        $(".left-sidebar").removeClass("active");
    });
});


// FOR NAVBAR ACTIVE MENU
$(".banner-cate").on("click", function(){
    $(".banner-cate").toggleClass("active");
});


// FOR PRICE RANGE SLIDER
$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
      }
    });
    $( "#amount" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ) +
      " - $" + $( "#slider-range" ).slider( "values", 1 ) );
});


// FOR GRID SYSTEM PRODUCT CARD
$('.grid-hori').on('click', function(){
    $('.product-card').addClass('product-list-card');
    $('.grid-hori').addClass('active');
    $('.grid-verti').removeClass('active');
    $('.grid-verti').on('click', function(){
        $('.product-card').removeClass('product-list-card');
        $('.grid-verti').addClass('active');
        $('.grid-hori').removeClass('active');
    });
});


