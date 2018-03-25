import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-commingson',
  templateUrl: './commingson.component.html',
  styleUrls: ['./commingson.component.scss']
})
export class CommingsonComponent implements OnInit {
  private commingList:Array<any>;
  constructor() { }

  ngOnInit() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:3000/api/commingsoon',true);
    xhr.send();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState==4&&xhr.status==200){
        var data = JSON.parse(xhr.responseText).data.films;
        console.log(data);
        this.commingList  = data;
      }
    }
  }

}
