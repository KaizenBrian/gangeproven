var app = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!',
        mathEngine: new MathEnginge(),
        userAnswer: 0,
        currentStatus: "",
    },
    methods: {
        answer: function (multiplication, userAnswer) {
            if (multiplication.answer == userAnswer) {
                this.currentStatus = "Correct";
            } else {
                this.currentStatus = "Wrong";
            }
            this.userAnswer = null;
            this.mathEngine.getNextMultiplication();
        }
    }
})