import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getDays'
})
export class GetDaysPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(value !==undefined){
      let dayArr = ["星期日","星期一","星期二","星期三","星期四","星期五","星期六"];
      let myDate = new Date(value);
      let week = dayArr[myDate.getDay()];
      return week;
    }
  }

}
