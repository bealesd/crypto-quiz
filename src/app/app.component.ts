import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  userName: string;
  idValid: boolean = false;
  title = 'crypto-quiz';
  uuid = '08a034f7-6e13-49eb-857e-5442367a2429';
  validIds = {
    'U2FsdGVkX1+3BwUvnwdcApe+Cz28FrHKXTPyxlBVvrQ=': 'Bill Beales',
    'U2FsdGVkX19lH/iaRfkPf51IvVYsFKUXzkyPZcj37Do=': 'Alan Sully'
  };
  array = [
    {
      number: 1,
      clue: 'Count the sides',
      answer: 4
    },
    {
      number: 2,
      clue: 'Count all the balls, including those you can\'t see',
      answer: 30
    },
    {
      number: 3,
      clue: 'Add the number to K to make a type of animal.',
      answer: 9
    },
    {
      number: 4,
      clue: 'Count the sides',
      answer: 4
    },
    {
      number: 5,
      clue: 'Count the sides',
      answer: 4
    },
    {
      number: 6,
      clue: 'Count the sides',
      answer: 4
    },
    {
      number: 7,
      clue: 'Count the sides',
      answer: 4
    },
    {
      number: 8,
      clue: 'Count the sides',
      answer: 4
    },
    {
      number: 9,
      clue: 'Count the sides',
      answer: 4
    },
    {
      number: 10,
      clue: 'Count the sides',
      answer: 4
    },
    {
      number: 11,
      clue: 'Count the sides',
      answer: 4
    }
  ];

  constructor() { }

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

}
