import { Component, OnInit } from '@angular/core';
import {Item} from "../interface/items.interface";

@Component({
  selector: 'app-inbox',
  templateUrl: './inbox.component.html',
  styleUrls: ['./inbox.component.css']
})
export class InboxComponent implements OnInit {
  inbox: Item[] = [
    {name: 'Pham Van Mach' , status: 'Apology for late respon email' , title:'Hello World' },
    {name: 'Pham Quoc Son' , status: 'Apology for late respon email' , title:'Hello World' },
    {name: 'Pham Dang Quang' , status: 'Aplication for job title' , title:'Hello World' },

    {name: 'Pham Van A' , status: 'Assitant trade market' , title:'Hello World' },
    {name: 'Pham Van C' , status: 'Aplication for job trader' , title:'Hello World' },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
