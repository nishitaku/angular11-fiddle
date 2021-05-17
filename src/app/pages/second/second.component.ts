import {
  ApplicationRef,
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

  constructor(
    private logService: LogService,
    private ngZone: NgZone,
    private changeDetectionRef: ChangeDetectorRef,
    private applicationRef: ApplicationRef
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
    this.ngZone.runOutsideAngular(() => {
      this.rootSvg.nativeElement.addEventListener('mousemove', this.mouseMove);
    });
  }

  private mouseMove = (event: MouseEvent) => {
    console.log(`onMouseMove`);
    this.addLog(
      `${this.getMMDDSS()}: onMouseMove fired. p=${this.getPoint(event)}`
    );
    // runOutsideAngular内のイベントハンドラでChangeDetectionをトリガーしたい場合は、
    // detectChangesではなくapplicationRef.tickを使う
    // this.changeDetectionRef.detectChanges();
    this.applicationRef.tick();

    // あるいは、AngularZoneに戻ってdetectChangesを呼ぶ
    // this.ngZone.run(() => {
    //   this.changeDetectionRef.detectChanges();
    // });
  };

  onMouseUp(): void {
    this.addLog(`${this.getMMDDSS()}: onMouseUp fired.`);
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
