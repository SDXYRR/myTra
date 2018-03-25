import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cutDown'
})
export class CutDownPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if(args==10){
      return value.slice(0,10)+'...';
    }
    if(args==18){
      return value.slice(0,18)+'...';
    }
  }

}
