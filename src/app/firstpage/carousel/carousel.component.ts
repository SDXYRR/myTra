import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class CarouselComponent implements OnInit {
    private carouList:Array<any>;
    constructor() {
    }

  ngOnInit() {
    this.carouList = [];
    var xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:3000/api/listFocus',true);
    xhr.send();
    xhr.onreadystatechange = ()=>{
        if(xhr.readyState==4&&xhr.status==200){
            var data = JSON.parse(xhr.responseText);
            this.carouList = data.data.billboards;
        }
    };
  }
}
