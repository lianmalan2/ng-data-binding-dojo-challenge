import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  counterDict: { key: string, value: number }[] = ([]);

  constructor() { }

  increment(key: string): void {
    this.counterDict[key]++;
  }

  decrement(key: string): void {
    this.counterDict[key]--;
  }

  addNewCounter(key: string): void {
    this.counterDict[key] = this.counterDict[key] || 0;
  }

  getCount(key: string): number {
    return this.counterDict[key];
  }
}
