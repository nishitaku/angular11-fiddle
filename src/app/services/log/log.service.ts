import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: string[] = [];
  public logsSubject = new BehaviorSubject<string[]>([]);
  public logs$ = this.logsSubject.asObservable();

  constructor() {}

  add(log: string) {
    this.logs.push(log);
    this.logsSubject.next(this.logs);
  }

  clear() {
    this.logs = [];
    this.logsSubject.next(this.logs);
  }
}
