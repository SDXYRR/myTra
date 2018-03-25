import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-city-list',
  templateUrl: './city-list.component.html',
  styleUrls: ['./city-list.component.scss']
})
export class CityListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:3000/api/cityList',true);
    xhr.send();
    xhr.onreadystatechange =()=>{
      if(xhr.readyState==4&&xhr.status==200){
        var data = JSON.parse(xhr.responseText);
        console.log(data);
      }
    }
  }

}
