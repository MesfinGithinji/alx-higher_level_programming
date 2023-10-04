$(document).ready(function () {

    function fetchTranslation() {

        let languageCode = $("#language_code").val();

        $.getJSON("https://www.fourtonfish.com/hellosalut/hello/?lang=" + languageCode, function (data) {
            $("#hello").text(data.hello);
        })
            .fail(function () {
                $("#hello").text("Failed to fetch translation.");
            });
    }

    $("#btn_translate").click(fetchTranslation);

    $("#language_code").keypress(function (event) {
        if (event.which === 13) {
            fetchTranslation();
        }
    });
});
