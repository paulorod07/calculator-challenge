import { Grade } from './../calculator/calculator.model';
import { Injectable } from '@angular/core';
import { Input } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  gradeSubject = new BehaviorSubject<Grade>(null);
  constructor() {}

  @Input()
  grade: Grade = {
    name: '',
    grade1: null,
    grade2: null,
    grade3: null,
  };
}
