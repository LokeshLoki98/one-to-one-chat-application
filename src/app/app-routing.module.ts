import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MyprofileComponent } from './myprofile/myprofile.component';
import { Chat1Component } from './user1/chat1/chat1.component';
import { User1Component } from './user1/user1.component';
import { Chat2Component } from './user2/chat2/chat2.component';
import { User2Component } from './user2/user2.component';

const routes: Routes = [
  {
    path:"user1",
    children:
    [
      {
        path:"chat1",
        component:Chat1Component
      },
      
    ]
  },

  {
    path:"user2",
    children:
    [
      {
        path:"chat2",
        component:Chat2Component
      }
    ]

  },
 
  {
    path:"",
    component:MyprofileComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
