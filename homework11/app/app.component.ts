import { Component } from '@angular/core';

@Component({
  selector: 'app-root', //This will use in index.html
  // templateUrl: './app.component.html', //external as we use templateUrl
  // template: './counter/counter.component.html',

  // We pass default value from parent to child class(counter.component.ts) like this [initValue]="counterStart".
  // messageEmitter is emitted @Output() from child class(counter.component.ts)
  template: `   
 <app-counter [initValue]="counterStart" (messageEmitter)="displayValue($event)"></app-counter>
 This is from my Counter {{counterFromChildCounter}}
  `,
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  counterStart = 10; //This is default value that will send from parent to child.
  counterFromChildCounter = this.counterStart;

  displayValue(v) {
    this.counterFromChildCounter = v;
  }
}
