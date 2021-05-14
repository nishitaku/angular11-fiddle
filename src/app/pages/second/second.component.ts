import {
  ChangeDetectorRef,
  Component,
  DoCheck,
  ElementRef,
  NgZone,
  OnInit,
  ViewChild,
} from '@angular/core';
import { LogService } from 'src/app/services/log/log.service';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit, DoCheck {
  @ViewChild('rootSvg', { read: ElementRef }) rootSvg!: ElementRef;

  private isMoving = false;

  constructor(
    private logService: LogService,
    private ngZone: NgZone,
    private changeDetectionRef: ChangeDetectorRef
  ) {}

  ngOnInit(): void {
    this.addLog(`ngOnInit fired.`);
  }

  ngDoCheck(): void {
    console.log(`ngDoCheck`);
    this.addLog(`ngDoCheck fired.`);
  }

  onMouseDown(event: MouseEvent): void {
    this.addLog(
      `${this.getMMDDSS()}: onMouseDown fired. p=${this.getPoint(event)}`
    );
    this.isMoving = true;
    this.ngZone.runOutsideAngular(() => {
      this.rootSvg.nativeElement.addEventListener('mousemove', this.mouseMove);
    });
  }

  onMouseMove(event: MouseEvent): void {
    this.changeDetectionRef.detectChanges();
    // if (this.isMoving) {
    console.log(`onMouseMove`);
    this.addLog(
      `${this.getMMDDSS()}: onMouseMove fired. p=${this.getPoint(event)}`
    );
    // }
  }

  private mouseMove = (event: MouseEvent) => {
    // if (this.isMoving) {
    event?.preventDefault();
    console.log(`onMouseMove`);
    this.addLog(
      `${this.getMMDDSS()}: onMouseMove fired. p=${this.getPoint(event)}`
    );
    this.changeDetectionRef.detectChanges();
    // }
  };

  onMouseUp(): void {
    this.addLog(`${this.getMMDDSS()}: onMouseUp fired.`);
    this.isMoving = false;
    this.rootSvg.nativeElement.removeEventListener('mousemove', this.mouseMove);
  }

  private getMMDDSS(): string {
    const now = new Date();
    return `${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`;
  }

  private getPoint(event: MouseEvent): string {
    return `{x:${event.clientX}, y:${event.clientY}}`;
  }

  private addLog(text: string): void {
    this.logService.add(this, text);
  }
}
