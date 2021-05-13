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
  @Input() inputStr!: string;
  @Input() inputObject!: Todo;
  @Input() inputFetchObject!: Todo;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.add(this, `ngOnInit fired.`);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logService.add(this, `ngOnChanges fired. ${JSON.stringify(changes)}`);
  }

  ngDoCheck(): void {
    this.logService.add(this, `ngDoCheck fired.`);
  }
}
