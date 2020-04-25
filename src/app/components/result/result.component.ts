import { ResultService } from './result.service';
import { Grade } from './../calculator/calculator.model';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.css'],
})
export class ResultComponent implements OnInit {
  @Input()
  grade: Grade = {
    name: '',
    grade1: null,
    grade2: null,
    grade3: null,
  };

  constructor(private resultService: ResultService) {}

  ngOnInit() {}
}
