import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-cinema-f',
  templateUrl: './cinema-f.component.html',
  styleUrls: ['./cinema-f.component.scss']
})
export class CinemaFComponent implements OnInit {
  @Input() cinemaList:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
