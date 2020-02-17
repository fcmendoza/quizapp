class helper {
    questions = [
        {
            "id": 1,
            "question": "Which one of the following is a fruit?",
            "options": [
                {"number": 1, "answer": "Carrot"},
                {"number": 2, "answer": "Pizza"},
                {"number": 3, "answer": "Apple"}
            ],
            "answer_number": 3
        }, {
            "id": 2,
            "question": "What type of paradigm does the C# language follow?",
            "options": [
                {"number": 1, "answer": "Procedural Programming"},
                {"number": 2, "answer": "Object Oriented Programming"},
                {"number": 3, "answer": "Functional Programming"}
            ],
            "answer_number": 2
        }, {
            "id": 3,
            "question": "Which one of the following is *not* a collection in C#?",
            "options": [
                {"number": 1, "answer": "IEnumerable"},
                {"number": 2, "answer": "IList"},
                {"number": 3, "answer": "IDisposable"}
            ],
            "answer_number": 3
        }, {
            "id": 4,
            "question": "How many classes can a child class inherit from?",
            "options": [
                {"number": 1, "answer": "One"},
                {"number": 2, "answer": "Two"},
                {"number": 3, "answer": "There's no limit"}
            ],
            "answer_number": 1
        }, {
            "id": 5,
            "question": "What is the base class in .NET from which all the classes are derived from?",
            "options": [
                {"number": 1, "answer": "System.String"},
                {"number": 2, "answer": "System.Object"},
                {"number": 3, "answer": "System.Class"}
            ],
            "answer_number": 2
        }, {
            "id": 6,
            "question": "What of the following features is not part of C#?",
            "options": [
                {"number": 1, "answer": "Generics"},
                {"number": 2, "answer": "Extension methods"},
                {"number": 3, "answer": "Multiple Inheritance"}
            ],
            "answer_number": 3
        }
    ];

    get_random_question() {
        var min = 0;
        var max = this.questions.length-1;
        var i = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.questions[i];
    }
}
