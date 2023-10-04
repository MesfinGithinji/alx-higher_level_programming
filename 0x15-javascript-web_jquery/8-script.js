/**
 * script that fetches and lists the title for all movies by using this URL: https://swapi-api.alx-tools.com/api/films/?format=json
 *
 * First we Fetch data from the URL using jQuery's $.getJSON() method
 * Next Extract and list movie titles
 * Finally handle any errors
 */
$(document).ready(function () {
    $.getJSON("https://swapi-api.alx-tools.com/api/films/?format=json", function (data) {
        let movieList = $("#list_movies"); // Extract and list movie titles
        $.each(data.results, function (index, movie) {
            movieList.append("<li>" + movie.title + "</li>");
        });
    })
    .fail(function () {
        $("#list_movies").text("Failed to fetch movie titles.");
    });
});
