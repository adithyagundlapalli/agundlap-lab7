import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Survey } from '../survey.interface';

@Component({
  selector: 'app-survey-form',
  templateUrl: './survey-form.component.html',
  styleUrls: ['./survey-form.component.scss'],
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule]
})
export class SurveyFormComponent {
  @Output() surveySubmitted = new EventEmitter<Survey>();
  
  surveyForm: FormGroup;

  constructor(private fb: FormBuilder) {
    this.surveyForm = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]],
      email: ['', [Validators.required, Validators.email]],
      age: ['', [Validators.required, Validators.min(1), Validators.max(120)]],
      feedback: ['', [Validators.required, Validators.minLength(10)]]
    });
  }

  onSubmit(): void {
    console.log('Form submitted', this.surveyForm.value, this.surveyForm.valid); // Debug log
    if (this.surveyForm.valid) {
      const surveyData: Survey = {
        name: this.surveyForm.get('name')?.value,
        email: this.surveyForm.get('email')?.value,
        age: Number(this.surveyForm.get('age')?.value),
        feedback: this.surveyForm.get('feedback')?.value
      };
      this.surveySubmitted.emit(surveyData);
      this.surveyForm.reset();
    }
  }
}