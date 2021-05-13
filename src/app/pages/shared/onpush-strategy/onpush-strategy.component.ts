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
import { Todo } from '../../first/models/Todo';

@Component({
  selector: 'app-onpush-strategy',
  templateUrl: './onpush-strategy.component.html',
  styleUrls: ['./onpush-strategy.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class OnpushStrategyComponent implements OnInit, OnChanges, DoCheck {
  @Input() text!: string;
  @Input() todo!: Todo;
  @Input() fetchedTodo!: Todo;
  @Input() logColor?: string;

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
    this.logService.add(this, text, this.logColor);
  }
}
