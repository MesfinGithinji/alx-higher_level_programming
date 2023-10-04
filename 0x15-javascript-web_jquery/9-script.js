/**
 * script that fetches and lists the title for all movies by using this URL: https://swapi-api.alx-tools.com/api/films/?format=json
 *
 * First we Fetch data from the URL using jQuery's $.getJSON() method
 * Next / Extract and display the translation of "hello"
 * Finally handle any errors that may occur during the request
 */

$(document).ready(function () {
    $.getJSON("https://fourtonfish.com/hellosalut/?lang=fr", function (data) {
        var translation = data.hello;//Extract and display the translation of "hello"
        $("#hello").text(translation);
    })
    .fail(function () {
        $("#hello").text("Failed to fetch translation.");
    });
});
