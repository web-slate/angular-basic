import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'account-number',
  templateUrl: './account-number.component.html',
  styleUrls: ['./account-number.component.css']
})

export class AccountNumberComponent implements OnInit {

	@Input() id = "accountNumber";
	@Input() placeholder = "Account Number";
	@Input() label = "Enter an Account Number";
	@Input() info = "Please enter 16 digit account number";
	@Input() success = "Valid Account number";

  constructor() { }

  ngOnInit() {
  }

}
