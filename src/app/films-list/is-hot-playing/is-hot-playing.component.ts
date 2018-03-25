import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-is-hot-playing',
  templateUrl: './is-hot-playing.component.html',
  styleUrls: ['./is-hot-playing.component.scss']
})
export class IsHotPlayingComponent implements OnInit {
  @Input() Hdata:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
