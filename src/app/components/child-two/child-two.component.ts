import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-child-two',
  templateUrl: './child-two.component.html',
  styleUrls: ['./child-two.component.css']
})
export class ChildTwoComponent implements OnInit {

  @Input() textToCheck = '';

  @Output() feedbackEvent = new EventEmitter<string>();
  
  feedback =  new FormControl('');
  agreeText =  new FormControl('');
  
  constructor() { }

  ngOnInit(): void {}

  sentFeedback(value: string) {
    this.feedbackEvent.emit(value);
  }

}
