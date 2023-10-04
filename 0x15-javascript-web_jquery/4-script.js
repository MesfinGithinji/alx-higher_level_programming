/**
 * script that toggles the class of the <header> element when the user clicks on the tag DIV#toggle_header
 *
 * hasClass() method is a jQuery function used to check if an element has a specific CSS class.
 * removeClass() method in jQuery is used to remove one or more CSS classes from selected HTML elements.
 * addClass() method in jQuery is used to add one or more CSS classes to selected HTML elements.
 *
 * so in the code below we check if the header has a certain class if it returns true then we add the class we want to the header.
 */
/*
$(document).ready(function () {
    let header = $("header");
    $("#toggle_header").click(function () {
        if (header.hasClass("red")) {
            header.removeClass("red").addClass("green");
        } else {
            header.removeClass("green").addClass("red");
        }
    });
});
*/
/**
 * We can also use the toggle class method to achieve the same output 
 */
$(document).ready(function () {
    $("#toggle_header").click(function () {
        $("header").toggleClass("red green");
    });
});
