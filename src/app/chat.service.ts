import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ChatService 
{
  msgs:any;

  chatMsg:any=[];

  chat(msg:any)
  {

    this.chatMsg.push(msg)

    return this.chatMsg;
  

 }
 


  constructor() { }
}
