let questions = [];

class Question {
  constructor(number, question, extra) {
    this.number = number;
    this.question = question;
    this.extra = extra;
  }

  get_number() {
    return this.number;
  }

  get_question() {
    return this.question;
  }

  get_extra() {
    return this.extra;
  }

}

function create_question(question, extra) {
  var question = new Question(question, extra);
  questions.push(question);
}

function start() {
  total_questions = document.getElementById("total");
  question_number = document.getElementById("number");
  question_tag = document.getElementById("question");
  question_extra = document.getElementById("extra");

  total_questions.innerText = "Number of questions: " + questions.length;
}

function new_question() {
  var question = questions[Math.floor(Math.random() * questions.length)];
  question_number.innerText = "Question number: " + question.get_number();
  question_tag.innerText = question.get_question();
  if (question.get_extra() !== undefined) {
    question_extra.innerText = "Extra question(s): " + question.get_extra();
  } else {
    question_extra.innerText = "";
  }

}