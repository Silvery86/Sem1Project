import { Component, OnInit } from '@angular/core';
import {Item} from "../interface/items.interface";

@Component({
  selector: 'app-sentitems',
  templateUrl: './sentitems.component.html',
  styleUrls: ['./sentitems.component.css']
})
export class SentitemsComponent implements OnInit {
  sentitems: Item[] = [
    {name: 'Pham Quoc Hoang' , status: 'Apology for late respon email' , title:'Hello World' },
    {name: 'Pham Dang Quang' , status: 'Aplication for job title' , title:'Hello World' },
    {name: 'Pham Van Mach' , status: 'Apology for late respon email' , title:'Hello World' },
    {name: 'Pham Van Mach' , status: 'Assitant trade market' , title:'Hello World' },
    {name: 'Pham Van Mach' , status: 'Aplication for job trader' , title:'Hello World' },

  ]
  constructor() { }

  ngOnInit(): void {
  }

}
