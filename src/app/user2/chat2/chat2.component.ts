import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat2',
  templateUrl: './chat2.component.html',
  styleUrls: ['./chat2.component.css']
})
export class Chat2Component implements OnInit {
  isShown:boolean;
  msgs: any = [];
  lastseen:any;
  dateObj: any = new Date();
  constructor(private data:ChatService) {
    this.isShown = false;
   }
  
  send(msg2:any) {
    this.msgs.push({
      text: msg2,
      origin: 'from',
      
    });
    // this.dateObj=localStorage.getItem('time');
    this.data.chatMsg=this.msgs;
  }
  emoji()
  {
    this.isShown = true;
  }
  addemoji(msg1:any)
  {
    this.isShown = false;
    // this.msgs=msg1;
  }
  ngOnInit(): void {
    this.msgs=this.data.chatMsg;
  }

}

