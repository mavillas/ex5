//javascript

//call to jQuery ready function
//make sure html and css aare loaded

$(document).ready(function () {
    console.log("ready");

    $('.datepicker').pickadate();
    $('.timepicker').pickatime();
    
    $('section#overlay p, section#overlay nav#close').hide();

    $('.button').click(function () {
        console.log('open overlay');
        //add a variable called "center" that locates the center of the window

        var center = $(window).width() / 2;
        //set the left property for the overlay to the center variable

        $('section#overlay').css('left', center).animate({
            width: '100%',
            left: '0',
        });
        $('section#overlay p, section#overlay nav#close').show();
        return false;
    });

    $('nav#close').click(function () {
        console.log('close overlay');
        $('section#overlay').css('width', '0px').css('visibility', 'hidden');
        $('section#overlay p, section#overlay nav#close').hide();
        
        return false;
    });

});