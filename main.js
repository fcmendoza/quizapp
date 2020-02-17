(function($, window, document) {
    $(function() {
        $.getJSON("http://quizsharp.s3-website-us-west-1.amazonaws.com/quiz_db.json", function(data) {
            _helper.questions = data;
            init();
        });
    });

    function init() {
        $("#button-start").click(function() {
            $("div#instructions-container").hide();
            next();
        });
        $("#button-next").click(next);
        $("#button-restart").click(function() {
            location.reload();
        });
        
        $("#question-container").on('click', 'button', answer_chosen);
    }

    function next() {
        if (_count < _max_questions_count && are_questions_available()) {
            var q = get_question();
            display_question(q);
            _count++;
            _correct_answer_id = q.answer_number;
        } else {
            // end of the game
            display_summary();
        }
    }

    function answer_chosen() {
        var me = $(this);
        if (me.attr("id") == _correct_answer_id) {
            me.addClass("btn-success");
            _correct_answers_count++;
        } else {
            me.addClass("btn-danger");
        }
        $("#question-container .btn").prop("disabled", true);
        update_running_tally();
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
        $("#question-container").empty();
        $("#button-next").hide();
        $("#question-container").append(`<p>${q.question}</p>`);

        var options = [];
        $.each(q.options, function(i, item) {
            var btn = `<button id="${item.number}" class="btn btn-primary btn-block">${item.answer}</button>`;
            options.push(btn);
        });
        
        // show all answers as buttons.
        $("<div/>", {
            "class": "answers",
            html: options
        }).appendTo("#question-container");
    }

    function display_summary() {
        var score = (_correct_answers_count/_max_questions_count)*100;
        $("#score").text(score);
        $("#summary").show();
        $("#button-next").hide();
    }

    function update_running_tally() {
        $("#tally").show();
        $("#tally").html(`Correct answers: ${_correct_answers_count} of ${_max_questions_count}.`);
        $("#button-next").show();
    }

    function are_questions_available() {
        return !(_questions_asked.length >= _helper.questions.length);
    }

    var _helper = new helper();
    var _count = 0;
    var _max_questions_count = 10;
    var _questions_asked = [];
    var _correct_answer_id = 0;
    var _correct_answers_count = 0;

})(window.jQuery, window, document);
