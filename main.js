(function($, window, document) {
    console.log("hello");

    $(function() {
        $("#button-next").click(next);
    });

    function next() {
        if (_count <= _max_questions_count && are_questions_available()) {
            var q = get_question();
            display_question(q);
            _count++;
        } else {
            console.log("This is the end. Thank you for playing. Your score is: 100")
        }
    }

    // gets a question that has not been asked before (in the current "session")
    function get_question() {
        if (_questions_asked.length >= _helper.questions.length) // check the arrays' length to avoid an infinite loop.
            return null; // we've asked every single question we have in our "database".

        var q = _helper.get_random_question();
        
        if (!_questions_asked.includes(q.id)) { // check if question has not been asked in this "session"
            _questions_asked.push(q.id);
            return q;
        } else { // try again
            return get_question();
        }
    }

    function display_question(q) {
        $("div#question-container").empty();
        
        var question_element = "<p id='" + q.id + "'>" + q.question + "</p>";
        
        $("div#question-container").append(question_element);

        var options = [];
        $.each(q.options, function(i, item) {
            options.push("<li id='" + item.number + "'>" + item.answer + "</li>");
        });
        
        $("<ul/>", {
            "class": "my-new-list",
            html: options
        }).appendTo("div#question-container");
    }

    function are_questions_available() {
        return !(_questions_asked.length >= _helper.questions.length);
    }

    var _count = 0;
    var _max_questions_count = 50;
    var _helper = new helper();
    var _questions_asked=[];

})(window.jQuery, window, document);
