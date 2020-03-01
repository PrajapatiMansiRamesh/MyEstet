import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SliderComponent } from './slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SliderComponent
  ],
  imports: [
    BrowserModule, BrowserAnimationsModule],
  providers: [
   
  ],
  bootstrap: [ AppComponent]
})
export class AppModule { }
