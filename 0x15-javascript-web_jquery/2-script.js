/**
 * updates the text color of the <header> element to red (#FF0000) when the user clicks on the tag DIV#red_header:
 * Event being handled is onclick
 */
/**
 * We use $(document).ready() to ensure that the code runs after the DOM (Document Object Model) has been fully loaded.
 */
$(document).ready(function () {
    $('div#red_header').click(function () {
        $('header').css('color', '#FF0000');
    });
});
