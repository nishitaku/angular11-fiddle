import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatDividerModule } from '@angular/material/divider';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainComponent } from './pages/main/main.component';
import { FirstComponent } from './pages/first/first.component';
import { LogComponent } from './pages/shared/log/log.component';
import { SecondComponent } from './pages/second/second.component';
import { FirstOneComponent } from './pages/first/components/first-one/first-one.component';
import { FirstTwoComponent } from './pages/first/components/first-two/first-two.component';
import { DefaultStrategyComponent } from './pages/shared/default-strategy/default-strategy.component';
import { OnpushStrategyComponent } from './pages/shared/onpush-strategy/onpush-strategy.component';

@NgModule({
  declarations: [
    AppComponent,
    MainComponent,
    FirstComponent,
    LogComponent,
    SecondComponent,
    FirstOneComponent,
    FirstTwoComponent,
    DefaultStrategyComponent,
    OnpushStrategyComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatDividerModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
