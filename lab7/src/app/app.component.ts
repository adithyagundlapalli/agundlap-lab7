import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey } from './survey.interface';
import { SurveyFormComponent } from './survey-form/survey-form.component';
import { SurveyTableComponent } from './survey-table/survey-table.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, SurveyFormComponent, SurveyTableComponent],
  template: `
    <div class="container">
      <h1>Survey Form</h1>
      <app-survey-form (surveySubmitted)="onSurveySubmitted($event)"></app-survey-form>
      <app-survey-table [surveys]="surveys"></app-survey-table>
    </div>
  `,
  styles: [
    `.container { padding: 20px; max-width: 1200px; margin: 0 auto; }
     h1 { text-align: center; }`
  ]
})
export class AppComponent {
  surveys: Survey[] = [];

  onSurveySubmitted(survey: Survey) {
    this.surveys.push(survey);
  }
}