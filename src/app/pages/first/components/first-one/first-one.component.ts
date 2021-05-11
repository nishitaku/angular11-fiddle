import {
  Component,
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
export class FirstOneComponent implements OnInit, OnChanges {
  @Input() inputStr!: string;
  @Input() inputObject!: Todo;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.add(this, `ngOnInit fired.`);
    if (this.inputStr == null) {
      throw new Error('[inputStr] is required.');
    }
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.logService.add(this, `ngOnChanges fired. ${JSON.stringify(changes)}`);
  }
}
