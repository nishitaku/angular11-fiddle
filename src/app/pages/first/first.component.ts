import { Component, DoCheck, OnInit } from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit, DoCheck {
  text?: string;

  constructor(private logService: LogService) {}

  ngOnInit(): void {
    this.logService.add('FirstComponent: ngOnInit');
    this.text = 'start';
  }

  ngDoCheck(): void {
    this.logService.add('FirstComponent: ngDoCheck');
  }

  getBgColor(): string {
    this.logService.add('FirstComponent: getBgColor');
    return 'green';
  }

  onClickChangeText(): void {
    this.text = 'changed';
  }
}
