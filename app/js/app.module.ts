// Core Modules
import { NgModule }      from '@angular/core';
import { Http }      from '@angular/http';
import { BrowserModule } from '@angular/platform-browser';

// Other Modules
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule, TranslateLoader, TranslateStaticLoader } from 'ng2-translate';

// App Files
import { AppComponent }   from './app.component';
import { NavComponent }   from './shared/components/common/navBar';
import { BannerComponent }   from './shared/components/common/banner';
import { ButtonComponent }   from './shared/components/form/button';

@NgModule({
  imports: [
		BrowserModule,
		NgbModule.forRoot(),
		TranslateModule.forRoot({
			provide: TranslateLoader,
			useFactory: (http: Http) => new TranslateStaticLoader(http, '/i18n/US', '.json'),
			deps: [Http]
		})
	],
  declarations: [ AppComponent, NavComponent, BannerComponent, ButtonComponent ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
