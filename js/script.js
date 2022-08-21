'use strict';

$(document).ready(function() {
    $(".overlay__link").click(function(event) {
        event.preventDefault();
        $(".navigation").toggleClass("open");

    });
});