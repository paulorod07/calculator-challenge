import { Grade } from './calculator.model';
import { Component, OnInit, Input, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ResultService } from '../result/result.service';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css'],
})
export class CalculatorComponent implements OnInit {
  @Input()
  grade: Grade = {
    name: '',
    grade1: null,
    grade2: null,
    grade3: null,
  };

  constructor(private router: Router, private resultService: ResultService) {}

  ngOnInit() {}

  /*onClick(gradeInput) {
    // gradeInput is an object contains all the properties of the grade
    // design it as you want, maybe you pass name, grade1, grade2, and grade3 manually
    // the most important thing, that we need to pass this object through the behavior subject

    this.resultService.gradeSubject.next(gradeInput);
  }*/

  calcGrade(): void {
    let nota1 = this.grade.grade1 * 0.25;
    let nota2 = this.grade.grade2 * 0.25;
    let nota3 = this.grade.grade3 * 0.5;

    let conta = nota1 + nota2 + nota3;

    if (conta < 6.2) {
      console.log(
        `o aluno ${this.grade.name} foi reprovado com a nota ${conta}`
      );
      this.router.navigate(['/result']);
    }
    if (conta >= 6.2) {
      console.log(
        `o aluno ${this.grade.name} foi aprovado com a nota ${conta}`
      );
      this.router.navigate(['/result']);
    }
  }
}
