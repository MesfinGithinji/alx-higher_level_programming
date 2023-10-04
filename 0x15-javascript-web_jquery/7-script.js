/**
 *  script that fetches the character name from this URL: https://swapi-api.alx-tools.com/api/people/5/?format=json
 *
 * First we Fetch data from the URL using jQuery's $.getJSON() method
 * Next we Extract the character name from the fetched data
 * Then we Update the content of the HTML <div> with the ID "character"
 * finally Handle any errors that may occur during the request
 */

$(document).ready(function () {
    $.getJSON("https://swapi-api.alx-tools.com/api/people/5/?format=json", function (data) {
        let characterName = data.name;// Extract the character name from the fetched data
        $("#character").text(characterName);
        // Update the content of the HTML <div> with the ID "character"
    })
        .fail(function () {
            $("#character").text("Failed to fetch character name.");
            // Handle any errors that may occur during the request
        });
});
