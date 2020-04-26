import { Grade } from './calculator.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../result/result.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  grade: Grade = {
    name: '',
    grade1: null,
    grade2: null,
    grade3: null,
    account: null,
  };

  constructor(private router: Router, private resultService: ResultService) {}

  ngOnInit() {}

  calcGrade(): void {
    this.grade.account =
      this.grade.grade1 * 0.25 +
      this.grade.grade2 * 0.25 +
      this.grade.grade3 * 0.5;

    if (this.grade.account < 6.2) {
      this.router.navigate(['/result/reprove']);
    }
    if (this.grade.account >= 6.2) {
      this.router.navigate(['/result/approve']);
    }

    this.resultService.gradeSubject.next(this.grade);
  }
}
