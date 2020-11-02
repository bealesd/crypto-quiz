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

  questionExpanded: boolean = false;
  isAnswerCorrect: boolean | null = null;
  clueClicked: boolean = false;
  checkAnswerExapnded: boolean = false;

  constructor() { }

  ngOnInit() { }

  checkAnswer(value: string) {
    if (isNaN(<any>(value))) {
      alert('Not a Number!');
      (<any>document.querySelector('.answerInput')).value = '';
    }

    else if (parseInt(value) !== this.answer)
      this.isAnswerCorrect = false;
    else
      this.isAnswerCorrect = true;
  }

  clickQuestion(){
    this.questionExpanded = !this.questionExpanded;
  }

  clickClue() {
    this.clueClicked = !this.clueClicked;
  }

  togglecheckAnswerExapnsion() {
    this.checkAnswerExapnded = !this.checkAnswerExapnded;
  }

}
