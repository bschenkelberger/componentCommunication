import { UpperCasePipe } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-one',
  templateUrl: './child-one.component.html',
  styleUrls: ['./child-one.component.css']
})
export class ChildOneComponent implements OnInit {

  //@Input() eingabeText = '';
  private _eingabeText = '';
  
  get eingabeText(): string { 
    return this._eingabeText;
  }
  @Input() 
  set eingabeText(value: string) {
    let valueUpperCase = this.upperCasePipe.transform(value);
    this._eingabeText = valueUpperCase || '<Noch nichts angegeben>';
  }

  @Input("parentAliasEingabeText") alias = '';
  
  constructor(private upperCasePipe : UpperCasePipe) { }

  ngOnInit(): void {
  }

}

  //@Input("parentAliasEingabeText") alias = '';

/*   private _eingabeText = '';
  @Input() 
  get eingabeText(): string { 
    return this._eingabeText;
  }
  set eingabeText(value: string) {
    let valueUpperCase = this.upperCasePipe.transform(value);
    this._eingabeText = valueUpperCase || '<Noch nichts angegeben>';
  }
 */
