import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { NavBarComponent } from './shared/components/common/nav-bar/nav-bar.component';
import { BannerComponent } from './shared/components/common/banner/banner.component';

import { AccountNumberComponent } from './shared/components/form/account-number/account-number.component';
import { InputBoxComponent } from './shared/components/form/input/input.component';
import { SubmitButtonComponent } from './shared/components/form/submit-button/submit-button.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    BannerComponent,
    AccountNumberComponent,
    InputBoxComponent,
    SubmitButtonComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
