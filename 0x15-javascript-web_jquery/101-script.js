$(document).ready(function () {
    $("#add_item").click(function () {
        let newItem = $("<li>Item</li>");
        $(".my_list").append(newItem);
    });

    $("#remove_item").click(function () {
        let list = $(".my_list");
        let lastItem = list.find("li:last");
        lastItem.remove();
    });

    $("#clear_list").click(function () {
        let list = $(".my_list");
        list.empty();
    });
});
