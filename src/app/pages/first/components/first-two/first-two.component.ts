/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
import { ChangeDetectionStrategy } from '@angular/core';
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';
import { Todo } from '../../models/Todo';

@Component({
  selector: 'app-first-two',
  templateUrl: './first-two.component.html',
  styleUrls: ['./first-two.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstTwoComponent implements OnInit, OnChanges, DoCheck {
  @Input() inputStr!: string;
  @Input() inputObject!: Todo;
  @Input() inputFetchObject!: Todo;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.addLog(`ngOnInit fired.`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.addLog(`ngOnChanges fired. ${JSON.stringify(changes)}`);
  }

  ngDoCheck(): void {
    this.addLog(`ngDoCheck fired.`);
  }

  private addLog(text: string): void {
    this.logService.add(this, text, 'yellow');
  }
}
