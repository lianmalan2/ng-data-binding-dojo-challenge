import { counterKeys } from 'src/app/models/enums';
import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-count-display',
  templateUrl: './count-display.component.html',
  styles: []
})
export class CountDisplayComponent implements OnInit {
  key: counterKeys = 'partB';

  constructor(
    protected counterSvc: CounterService
  ) { }

  ngOnInit() {
    this.counterSvc.addNewCounter(this.key);
  }
}
