import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cenimes',
  templateUrl: './cenimes.component.html',
  styleUrls: ['./cenimes.component.scss']
})
export class CenimesComponent implements OnInit {
  private cinemas:Array<any>;
  constructor() { }

  ngOnInit() {
    var xhr = new XMLHttpRequest();
    xhr.open('get','http://localhost:3000/api/Cinema',true);
    xhr.send();
    xhr.onreadystatechange = ()=>{
      if(xhr.readyState == 4&&xhr.status == 200){
        var data = JSON.parse(xhr.responseText).data.cinemas;
        this.cinemas = data;
        console.log(data);
      }
    }
  }

}
