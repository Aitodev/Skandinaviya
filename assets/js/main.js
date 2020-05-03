jQuery(function($) {
    "use strict";
    // Add smooth scrolling to all links
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();

            // Store hash
            var hash = this.hash;

            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){

                // Add hash (#) to URL when done scrolling (default click behavior)
                window.location.hash = hash;
            });
        } // End if
    });

    /*----- Subscription Form ----- */
    $('.subscribe-form').on('submit', function(e) {
        var alert = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
            'Спасибо! Ваше сообщение отправлено!' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">×</span></button>' + '</div>';

        $(".submit-button").prop('disabled', true).text('Отправлено').blur();
        $(".submit-response").html(alert);
        // $("#response5").prev().find( "input.mail").val("");
    });

    /*----- Makerthon Form ----- */
    $('#makerthon-form').on('submit', function(e) {
        var alert = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
            'Спасибо! Ваше сообщение отправлено!' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">×</span></button>' + '</div>';

        $("#makerthon-submit").prop('disabled', true).text('Отправлено').blur();
        $("#makerthon-response").html(alert);
        // $("#response5").prev().find( "input.mail").val("");
    });

    /*----- Materials Form ----- */
    $('#materials-form').on('submit', function(e) {
        var alert = '<div class="alert alert-success alert-dismissible fade show" role="alert">' +
            'Спасибо! Ваше сообщение отправлено!' +
            '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
            '<span aria-hidden="true">×</span></button>' + '</div>';

        $("#materials-submit").prop('disabled', true).text('Отправлено').blur();
        $("#materials-response").html(alert);
        // $("#response5").prev().find( "input.mail").val("");
    });

});
