import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Survey } from '../survey.interface';

@Component({
  selector: 'app-survey-table',
  templateUrl: './survey-table.component.html',
  styleUrls: ['./survey-table.component.scss'],
  standalone: true,
  imports: [CommonModule]
})
export class SurveyTableComponent {
  @Input() surveys: Survey[] = [];
}