import { Component } from '@angular/core';
import { TranslateService } from 'ng2-translate';

@Component({
  selector: 'my-app',
  templateUrl: 'app/js/main.html'
})

export class AppComponent {
	constructor(private translate: TranslateService) {
		translate.addLangs(["en"]);
		translate.setDefaultLang('en');

		let browserLang = translate.getBrowserLang();
		translate.use(browserLang.match(/en/) ? browserLang : 'en');
	}
}
