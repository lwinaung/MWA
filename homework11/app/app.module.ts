import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CounterComponent } from './counter/counter.component';

@NgModule({
  declarations: [ //Add all components
    AppComponent,
    CounterComponent,
  ],
  imports: [
    BrowserModule, FormsModule
  ],
  providers: [
    //To work for Dependency Injection
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
