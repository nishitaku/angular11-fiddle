import {
  ChangeDetectionStrategy,
  Component,
  DoCheck,
  EventEmitter,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';
import { TodoService } from 'src/app/services/todo/todo.service';
import { Todo } from './models/Todo';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FirstComponent implements OnInit, OnDestroy, DoCheck {
  text: string = 'init';
  todo: Todo = new Todo('init object');
  fetchedTodo: Todo = new Todo('init object');

  private onDestroy$ = new EventEmitter();

  constructor(
    private logService: LogService,
    private todoService: TodoService
  ) {}

  async ngOnInit(): Promise<void> {
    this.logService.add(this, `ngOnInit fired.`);
    this.fetchedTodo = await this.todoService.fetchTodo();
  }

  ngDoCheck(): void {
    this.logService.add(this, `ngDoCheck fired`);
  }

  ngOnDestroy(): void {
    this.onDestroy$.next();
  }

  getBgColor(): string {
    // this.logService.add(this, `getBgColor fired.`);
    return 'green';
  }

  onClickChangeText(): void {
    // 再代入して参照を更新することで、子コンポーネントのngOnChangesが発火する
    this.text = 'changed';
  }

  onClickChangeObjectRef(): void {
    // 再代入して参照を更新することで、子コンポーネントのngOnChangesが発火する
    this.todo = new Todo('changed object');
  }

  onClickChangeObjectString(): void {
    // プロパティを変更するだけでは参照が更新されないため、子コンポーネントのngOnChangesは発火しない
    this.todo.title = 'changed title';
  }

  onClickUpdateFetchedTodo(): void {
    // TodoServiceが保持しているオブジェクトのプロパティを変更する
    // this.fetchedTodoは同じオブジェクトを参照しているため、変更される
    this.todoService.updateFetchedTodoTitle();
  }
}
