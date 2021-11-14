import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { User1Component } from './user1/user1.component';
import { User2Component } from './user2/user2.component';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { Chat1Component } from './user1/chat1/chat1.component';
import { Chat2Component } from './user2/chat2/chat2.component';


@NgModule({
  declarations: [
    AppComponent,
    User1Component,
    User2Component,
    Chat1Component,
    Chat2Component,
    HomeComponent,
    MyprofileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
