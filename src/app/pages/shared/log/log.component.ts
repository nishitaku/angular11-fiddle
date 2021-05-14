import {
  AfterViewChecked,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { Observable } from 'rxjs';
import { Log } from 'src/app/services/log/log.interface';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-log',
  templateUrl: './log.component.html',
  styleUrls: ['./log.component.scss'],
})
export class LogComponent implements OnInit, AfterViewChecked {
  @ViewChild('logContainer', { read: ElementRef }) logContainer!: ElementRef;

  logs$: Observable<Log[]> = this.logService.logs$;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.scrollToBottom();
  }

  onClickClear(): void {
    this.logService.clear();
  }

  ngAfterViewChecked(): void {
    this.scrollToBottom();
  }

  scrollToBottom(): void {
    try {
      this.logContainer.nativeElement.scrollTop = this.logContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
}
