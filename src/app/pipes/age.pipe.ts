import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'age'
})
export class AgePipe implements PipeTransform {

  transform(value: any ): any {
    let currentyear:any=new Date().getFullYear();
    let userdobyear :any = new Date(value).getFullYear();
    let userage= currentyear-userdobyear; 
    console.log(value)
    return userage;

  }

}
