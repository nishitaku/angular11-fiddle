import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit {
  logs$: Observable<string[]> = this.logService.logs$;

  constructor(private logService: LogService) {}

  ngOnInit(): void {}

  onClickClear(): void {
    this.logService.clear();
  }
}
