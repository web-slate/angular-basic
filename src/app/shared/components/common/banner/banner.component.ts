import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})

export class BannerComponent implements OnInit {

	@Input('heading') title = "Page Title";
	@Input('description') desc = "Description goes here";

  constructor() { }

  ngOnInit() {
  }

}
