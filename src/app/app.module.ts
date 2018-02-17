import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ButtonsComponent } from './components/buttons/buttons.component';
import { ChartComponent } from './components/chart/chart.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    ButtonsComponent,
    ChartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
