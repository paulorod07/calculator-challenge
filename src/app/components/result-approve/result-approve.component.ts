import { ResultService } from './../result/result.service';
import { Grade } from './../calculator/calculator.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-result-approve',
  templateUrl: './result-approve.component.html',
  styleUrls: ['./result-approve.component.css'],
})
export class ResultApproveComponent implements OnInit {
  grade: Grade;

  constructor(private resultService: ResultService) {}

  ngOnInit() {
    this.resultService.gradeSubject.subscribe((res: Grade) => {
      this.grade = res;
    });
  }
}
