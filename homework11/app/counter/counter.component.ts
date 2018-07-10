import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  // template: `
    // <span>
    //   <input type='button' value="-" (click)="decrement($event)" />
    //   {{counterValue}}
    //   <input type='button' value="+" (click)="increment($event)" />
    // </span>
  // `,
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  @Input('initValue') counterValue = 0; //If parent didn't pass default value, it will start from 0.

  constructor() { }

  ngOnInit() {
  }

  @Output() messageEmitter = new EventEmitter();

  increment(evt){
    console.log(evt);
    this.counterValue++;
    this.messageEmitter.emit(this.counterValue);
  } 
  decrement(evt){
    console.log(evt);
    this.counterValue--;
    this.messageEmitter.emit(this.counterValue);
  } 
}
