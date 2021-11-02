import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarPartMemberComponent } from './car-part-member/car-part-member.component';
import { CarPartMemberFormComponent } from './CarPartMember/car-part-member-form/car-part-member-form.component';

@NgModule({
  declarations: [
    AppComponent,
    CarPartMemberComponent,
    CarPartMemberFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
