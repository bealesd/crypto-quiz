import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-pass-code',
  templateUrl: './pass-code.component.html',
  styleUrls: ['./pass-code.component.css']
})
export class PassCodeComponent implements OnInit {
  @Input() username: string;
  @Input() passcode: number;

  isPasscodeCorrect: boolean | null = null;
  unlocking = true;
  message: string;

  dots = '';
  imageName: string;

  constructor() { }

  ngOnInit() {
    this.imageName = this.username.split(' ')[0].toLowerCase();

    if (this.imageName === 'bill') {
      this.message = 'Well done for cracking the code. Merry Christmas Dad. Love from David and Esther, xx';
    }
    else if (this.imageName === 'alan') {
      this.message = 'Well done for cracking the code. Happy Birthday Alan. Love from David and Esther, xx';
    }
    else {
      this.message = 'Well done for cracking the code.';
    }

    this.isPasscodeCorrect = null;
    this.unlocking = true;

  }

  checkAnswer(value: string) {
    if (isNaN((value) as any)) {
      alert('Not a Number!');
      (document.querySelector('.answerInput') as any).value = '';
    }
    else if (parseInt(value) !== this.passcode) {
      this.isPasscodeCorrect = false;
    }
    else {
      this.isPasscodeCorrect = true;
      this.unlocking = true;

      const dots = window.setInterval(() => {
        if (this.dots.length > 3)
          this.dots = "";
        else
          this.dots += ".";
      }, 500);

      setTimeout(() => {
        this.unlocking = false;
        clearInterval(dots);
      }, 5000);
    }
  }

}
