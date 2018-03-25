import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-leftmenu',
  templateUrl: './leftmenu.component.html',
  styleUrls: ['./leftmenu.component.scss']
})
export class LeftmenuComponent implements OnInit {
  private showItem:boolean;
  constructor() {
    this.showItem = false;
   }

  ngOnInit() {
  }

}
