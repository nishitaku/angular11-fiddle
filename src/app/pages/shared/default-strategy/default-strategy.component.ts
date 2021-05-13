/* eslint-disable @angular-eslint/no-conflicting-lifecycle */
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
  selector: 'app-default-strategy',
  templateUrl: './default-strategy.component.html',
  styleUrls: ['./default-strategy.component.scss'],
})
export class DefaultStrategyComponent implements OnInit, OnChanges, DoCheck {
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
