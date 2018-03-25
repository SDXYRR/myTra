import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-flims-t',
  templateUrl: './flims-t.component.html',
  styleUrls: ['./flims-t.component.scss']
})
export class FlimsTComponent implements OnInit {
  @Input() cmLs:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
