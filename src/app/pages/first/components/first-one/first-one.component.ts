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
import { Todo } from '../../models/Todo';
@Component({
  selector: 'app-first-one',
  templateUrl: './first-one.component.html',
  styleUrls: ['./first-one.component.scss'],
})
export class FirstOneComponent implements OnInit, OnChanges, DoCheck {
  @Input() text!: string;
  @Input() todo!: Todo;
  @Input() fetchedTodo!: Todo;

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
    this.logService.add(this, text, 'cyan');
  }
}
