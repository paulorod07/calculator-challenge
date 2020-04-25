import { Grade } from './../calculator/calculator.model';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ResultService {
  gradeSubject = new BehaviorSubject<Grade>(null);

  constructor() {}

  grade: Grade;
}
