import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.css']
})
export class QuestionComponent implements OnInit {

  @Input() clue: string;
  @Input() number: number;
  @Input() answer: number;

  questionExpanded = false;
  isAnswerCorrect: boolean | null = null;
  clueClicked = false;
  checkAnswerExapnded = false;
  imageFront = true;

  userAnswer = '';

  constructor() { }

  ngOnInit() {
    this.getUserAnswer();
  }

  getUserAnswer() {
    const userAnswer = window.localStorage.getItem(`question-${this.number}`);
    if (userAnswer === null || userAnswer === undefined)
      this.userAnswer = '';
    else
      this.userAnswer = userAnswer;
  }

  setUserAnswer(value: string) {
    if (!isNaN(<any>(value))) {
      window.localStorage.setItem(`question-${this.number}`, `${value}`);
    }
  }

  checkAnswer(value: string) {
    if (isNaN(<any>(value))) {
      alert('Not a Number!');
      (<any>document.querySelector('.answerInput')).value = '';
      return;
    }
    else if (parseInt(value) !== this.answer)
      this.isAnswerCorrect = false;
    else
      this.isAnswerCorrect = true;

    this.setUserAnswer(value);
    this.userAnswer = `${value}`;
  }

  clickQuestion() {
    this.getUserAnswer();
    this.questionExpanded = !this.questionExpanded;

  }

  clickClue() {
    this.clueClicked = !this.clueClicked;
  }

  togglecheckAnswerExapnsion() {
    this.checkAnswerExapnded = !this.checkAnswerExapnded;
  }

  imageChangeClick(value) {
    if (value === 'front') this.imageFront = true;
    else if (value === 'back') this.imageFront = false;
    else this.imageFront = !this.imageFront;
  }

}
