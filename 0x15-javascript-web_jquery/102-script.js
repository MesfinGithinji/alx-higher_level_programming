$(document).ready(function () {

    $("#btn_translate").click(function () {
        let languageCode = $("#language_code").val();
        $.getJSON("https://www.fourtonfish.com/hellosalut/hello/?lang=" + languageCode, function (data) {
            $("#hello").text(data.hello);
        })
            .fail(function () {
                $("#hello").text("Failed to fetch translation.");
            });
    });

});
