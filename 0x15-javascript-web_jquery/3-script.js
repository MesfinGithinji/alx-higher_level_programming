/**
 * script that adds the class red to the <header> element when the user clicks on the tag DIV#red_header
 * .addClass will add onclick
 */
$(document).ready(function () {
    $('div#red_header').click(function () {
        $('header').addClass("red");
    });
});
