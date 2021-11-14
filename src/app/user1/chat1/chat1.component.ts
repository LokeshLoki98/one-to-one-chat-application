import { Component, OnInit } from '@angular/core';
import { ChatService } from 'src/app/chat.service';

@Component({
  selector: 'app-chat1',
  templateUrl: './chat1.component.html',
  styleUrls: ['./chat1.component.css'],
})
export class Chat1Component implements OnInit {

 // *****************************************Declaration*************************************//  
  isShown:boolean;
  msgs: any = [];
  lastseen:boolean;
  olivelastseen=new Date;
  olive="../../../assets/olive.png";
  dateObj: any = new Date();
  online:any;
 // *****************************************Constructor*************************************//
  constructor(private data: ChatService) {
     this.isShown = false;
     this.lastseen=false;
    }
  // *****************************************send method*************************************// 
  send(msg1: any) {
    this.msgs.push({
      text: msg1,
      origin: 'me',
      display:'name'
    });
    // localStorage.setItem('time',this.dateObj);
    this.data.chatMsg = this.msgs;
    this.online="online";
    !this.lastseen;
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

  // *****************************************ngOnInt*************************************//
  ngOnInit(): void {
    this.msgs = this.data.chatMsg;
  }

  ngOnDestroy(){
    
  }
}
