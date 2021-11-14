import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user1',
  templateUrl: './user1.component.html',
  styleUrls: ['./user1.component.css']
})
export class User1Component implements OnInit {

  constructor(private router:Router){}
  chat1()
  {
    this.router.navigateByUrl("user1/chat1");
  }
  ngOnInit(): void {
  }

}
