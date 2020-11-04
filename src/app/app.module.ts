import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { QuestionComponent } from './question/question.component';
import { EnvelopeComponent } from './envelope/envelope.component';
import { PassCodeComponent } from './pass-code/pass-code.component';

@NgModule({
  declarations: [
    AppComponent,
    QuestionComponent,
    EnvelopeComponent,
    PassCodeComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
