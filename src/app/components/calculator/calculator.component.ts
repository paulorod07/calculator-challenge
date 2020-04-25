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
  };

  constructor(private router: Router, private resultService: ResultService) {}

  ngOnInit() {}

  calcGrade(): void {
    let grade1 = this.grade.grade1 * 0.25;
    let grade2 = this.grade.grade2 * 0.25;
    let grade3 = this.grade.grade3 * 0.5;

    let account = grade1 + grade2 + grade3;

    if (account < 6.2) {
      this.router.navigate(['/result/reprove']);
    }
    if (account >= 6.2) {
      this.router.navigate(['/result/approve']);
    }

    this.resultService.gradeSubject.next(this.grade);
  }
}
