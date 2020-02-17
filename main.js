(function($, window, document) {
    console.log("hello");

    $(function() {
        var h = new helper();
        var questions = h.questions;

        var items = [];
        $.each(questions, function(i, q) {
            items.push( "<li id='" + q.id + "'>" + q.question + "</li>" );
        });

        console.log(items.length);

        $("<ul/>", {
            "class": "my-new-list",
            html: items.join("")
        }).appendTo("body");
    });
})(window.jQuery, window, document);
