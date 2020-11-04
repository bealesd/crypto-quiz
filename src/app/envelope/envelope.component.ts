import { Component, OnInit } from '@angular/core';
import { SubjectHelper } from '../subject-helper';

@Component({
  selector: 'app-envelope',
  templateUrl: './envelope.component.html',
  styleUrls: ['./envelope.component.css']
})
export class EnvelopeComponent implements OnInit {

  letterZedIndex = 5;
  letterOpen = false;

  questionsLink = '/questions';
  subject: SubjectHelper;

  constructor(subject: SubjectHelper) {
    this.subject = subject;
  }

  ngOnInit() { }

  open() {
    this.letterOpen = true;
    this.letterZedIndex = 7;
  }

  close() {
    this.letterOpen = false;
    this.letterZedIndex = 5;
  }

  openQuestions() {
    this.subject.route.next('questions');
  }

  sealClick() {
    if (window.confirm('Look under the seal?'))
      alert('You find the number 4.');
  }

  openPassCode() {
    this.subject.route.next('passcode');
  }

}
