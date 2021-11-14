import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user2',
  templateUrl: './user2.component.html',
  styleUrls: ['./user2.component.css']
})
export class User2Component implements OnInit {

  constructor(private router:Router) { }
  chat2(){
    this.router.navigateByUrl("user2/chat2");
  }
  ngOnInit(): void {
  }

}
