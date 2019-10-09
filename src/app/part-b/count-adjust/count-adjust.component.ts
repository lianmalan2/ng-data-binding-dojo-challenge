import { counterKeys } from 'src/app/models/enums';
import { Component, OnInit } from '@angular/core';
import { CounterService } from '../../services/counter.service';

@Component({
  selector: 'app-count-adjust',
  templateUrl: './count-adjust.component.html',
  styles: []
})
export class CountAdjustComponent implements OnInit {
  key: counterKeys = 'partB';

  constructor(
    protected counterSvc: CounterService
  ) { }

  ngOnInit() { }
}
