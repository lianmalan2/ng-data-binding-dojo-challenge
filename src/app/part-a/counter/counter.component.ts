import { counterKeys } from 'src/app/models/enums';
import { CounterService } from 'src/app/services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count',
  templateUrl: './counter.component.html',
  styles: []
})
export class CounterComponent implements OnInit {
  key: counterKeys = 'partA';

  constructor(
    protected counterSvc: CounterService
  ) { }

  ngOnInit() {
    this.counterSvc.addNewCounter(this.key);
  }
}
