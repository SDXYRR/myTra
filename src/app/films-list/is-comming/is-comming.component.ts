import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-is-comming',
  templateUrl: './is-comming.component.html',
  styleUrls: ['./is-comming.component.scss']
})
export class IsCommingComponent implements OnInit {
  @Input() CmData:Array<any>;
  constructor() { }

  ngOnInit() {
  }

}
