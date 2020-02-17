class helper {
    constructor() {
        this.questions = [];
    }

    get_random_question() {
        var min = 0;
        var max = this.questions.length-1;
        var i = Math.floor(Math.random() * (max - min + 1)) + min;
        return this.questions[i];
    }
}
