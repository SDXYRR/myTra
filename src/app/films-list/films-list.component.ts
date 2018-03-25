import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-films-list',
  templateUrl: './films-list.component.html',
  styleUrls: ['./films-list.component.scss']
})
export class FilmsListComponent implements OnInit {
  private HotData:Array<any>=[];
  private CommingData:Array<any>=[];

  constructor() { 
  }

  ngOnInit() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:3000/api/HotNplaying',true);
    xhr.send();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState==4&&xhr.status==200){
         var data = JSON.parse(xhr.responseText).data.films;
         this.HotData = data;
         console.log(data);
      }
    }

    var xxhr = new XMLHttpRequest();
    xxhr.open('get','http://localhost:3000/api/HotComing',true);
    xxhr.send();
    xxhr.onreadystatechange = ()=>{
      if(xxhr.readyState ==4&&xxhr.status ==200){
        var data = JSON.parse(xxhr.responseText).data.films;
        this.CommingData = data;
      }
    }
  }

}
