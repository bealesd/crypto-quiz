import { Component } from '@angular/core';
import { SubjectHelper } from './subject-helper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  subject: SubjectHelper;
  route: string;

  userName: string;
  idValid: boolean = false;

  title = 'crypto-quiz';
  uuid = '08a034f7-6e13-49eb-857e-5442367a2429';
  validIds = {
    'U2FsdGVkX1+3BwUvnwdcApe+Cz28FrHKXTPyxlBVvrQ=': 'Bill Beales',
    'U2FsdGVkX19lH/iaRfkPf51IvVYsFKUXzkyPZcj37Do=': 'Alan Sully'
  };


  questions = [
    {
      number: 1,
      clue: 'Count the sides.',
      answer: 4
    },
    {
      number: 2,
      clue: 'Count all the balls, including those you can\'t see.',
      answer: 30
    },
    {
      number: 3,
      clue: 'Add the number to K to make a type of animal.',
      answer: 9
    },
    {
      number: 4,
      clue: 'There are squares within squares, and they can overlap.',
      answer: 50
    },
    {
      number: 5,
      clue: 'The answer has nothing to do with the answers from questions 1-4.',
      answer: 3
    },
    {
      number: 6,
      clue: 'Look for what\'s left.',
      answer: 4
    },
    {
      number: 7,
      clue: 'It takes one staff member three minutes to serve one person',
      answer: 3
    },
    {
      number: 8,
      clue: 'It is not on any man-made structures.',
      answer: 2
    },
    {
      number: 9,
      clue: 'The answer is at your fingertips??',
      answer: 7
    },
    {
      number: 10,
      clue: 'Think outside the box, literally',
      answer: 4
    },
    {
      number: 11,
      clue: 'Look at the frequency of the letters (frequency analysis). You should be able to get \'F\'.',
      answer: 5
    }
  ];

  passcode = parseInt(this.questions.map(question => question.answer).join(''));

  constructor(subject: SubjectHelper) {
    this.subject = subject;
  }

  ngOnInit() {
    this.subject.route.subscribe(route => {
      this.route = route;
    });
  }

  createKey(password: string) {
    return (<any>window).CryptoJS.AES.encrypt(password, this.uuid).toString();
  }

  checkId(id: string) {
    Object.keys(this.validIds).forEach((encryptedId) => {
      let value = (<any>window).CryptoJS.AES.decrypt(encryptedId, this.uuid).toString((<any>window).CryptoJS.enc.Utf8);
      if (value === id) {
        this.userName = this.validIds[encryptedId];
        this.idValid = true;
      }
    });

    if (this.idValid === false)
      alert('Invalid id.');
  }

  openEnvelope() {
    this.subject.route.next('envelope');
  }

  openEnvelopeAndWarnUser() {
    if (window.confirm('Do you want to leave page, unchecked answers won\'t be saved?'))
      this.openEnvelope();
  }

  getPasscode() {
    const passcode = this.questions.map(question => question.number).map(questionNumber =>
      window.localStorage.getItem(`question-${questionNumber}`)).join('');
    if (passcode.length < 11)
      alert('You haven\'t answered all the questions!')
    else
      alert(`Passcode is: ${passcode}.`);
  }

  clearAnswers() {
    if (window.confirm('Are you sure you want to delete your answers?')) {
      this.questions.map(question => question.number).map(questionNumber =>
        window.localStorage.removeItem(`question-${questionNumber}`));
    }
  }
}
