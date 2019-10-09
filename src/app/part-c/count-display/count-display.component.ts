import { counterKeys } from 'src/app/models/enums';
import { CounterService } from 'src/app/services/counter.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styles: []
})
export class CountDisplayComponent implements OnInit {
  key: counterKeys = 'partC';

  constructor(
    protected counterSvc: CounterService
  ) { }

  ngOnInit() {
    this.counterSvc.addNewCounter(this.key);
  }
}
