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

Question.prototype.toString = function () {
  return this.question + "\n" + this.extra;
}


function start() {
  question_number = document.createElement("h4");
  question_tag = document.createElement("p")
  question_extra = document.createElement("p");

  question_number.innerText = "Number of questions: " + questions.length;
  document.getElementById("content").appendChild(question_number);
  document.getElementById("content").appendChild(question_tag);
  document.getElementById("content").appendChild(question_extra);
}

function new_question() {
  var question = questions[Math.floor(Math.random() * questions.length)];
  question_tag.innerText = question.get_question();
  if (question.get_extra() !== undefined) {
    question_extra.innerText = question.get_extra();
  } else {
    question_extra.innerText = "";
  }

}