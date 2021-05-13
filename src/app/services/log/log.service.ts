import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Log } from './log.interface';

@Injectable({
  providedIn: 'root',
})
export class LogService {
  logs: Log[] = [];
  public logsSubject = new BehaviorSubject<Log[]>([]);
  public logs$ = this.logsSubject.asObservable();

  constructor() {}

  add(obj: Object, text: string, color?: string) {
    const log: Log = {
      text: `${obj.constructor.name}: ${text}`,
      color: color,
    };
    this.logs.push(log);
    this.logsSubject.next(this.logs);
  }

  clear() {
    this.logs = [];
    this.logsSubject.next(this.logs);
  }
}
