import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'input-box',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})

export class InputBoxComponent implements OnInit {

	@Input() id = "inputId";
	@Input() type = "text";
	@Input() placeholder = "Place Holder Goes here";
	@Input() label = "Enter Value";
	@Input() info = "Please enter value";
	@Input() success = "Valid Field";

	helpId = null;

  constructor() {
		this.helpId = "help-" + this.id;
	}

  ngOnInit() {
  }

}
