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

  constructor() { }

  ngOnInit() { }

  checkAnswer(value: string) {
    if (isNaN(<any>(value))) {
      alert('Not a Number!');
      (<any>document.querySelector('.answerInput')).value = '';
    }

    else if (parseInt(value) !== this.answer) this.isAnswerCorrect = false;
    else this.isAnswerCorrect = true;
  }

  clickQuestion() {
    this.questionExpanded = !this.questionExpanded;
  }

  clickClue() {
    this.clueClicked = !this.clueClicked;
  }

  togglecheckAnswerExapnsion() {
    this.checkAnswerExapnded = !this.checkAnswerExapnded;
  }

  imageChangeClick(value){
    if(value === 'front') this.imageFront = true;
    else if(value === 'back') this.imageFront = false;
    else this.imageFront = !this.imageFront ;
  }

}
