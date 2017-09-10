import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: String[], separator: string = ' '): String {
    return value.join(separator);
  }

}
