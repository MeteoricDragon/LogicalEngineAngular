import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
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
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
