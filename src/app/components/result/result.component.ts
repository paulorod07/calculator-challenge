import { ResultService } from './result.service';
import { Grade } from './../calculator/calculator.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  grade: Grade;

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.resultService.gradeSubject.subscribe((res: Grade) => {
      this.grade = res;
    });
  }
}
