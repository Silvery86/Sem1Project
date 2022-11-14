import { Component, OnInit} from '@angular/core';
import {faShoppingCart, faUser} from "@fortawesome/free-solid-svg-icons";


@Component({
  selector: 'app-navigator',
  templateUrl: './navigator.component.html',
  styleUrls: ['./navigator.component.css']
})
export class NavigatorComponent implements OnInit {
  faCart= faShoppingCart;
  faLogin = faUser;


  constructor() { }

  ngOnInit(): void {
  }

}
