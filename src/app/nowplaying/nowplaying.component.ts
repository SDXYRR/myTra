import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nowplaying',
  templateUrl: './nowplaying.component.html',
  styleUrls: ['./nowplaying.component.scss']
})
export class NowplayingComponent implements OnInit {
  private filesList:Array<any>;
  constructor() { }

  ngOnInit() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:3000/api/nowplaying',true);
    xhr.send();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState==4&&xhr.status==200){
        var data = JSON.parse(xhr.responseText).data.films;
        this.filesList = data;
      }
    }
  }

}
