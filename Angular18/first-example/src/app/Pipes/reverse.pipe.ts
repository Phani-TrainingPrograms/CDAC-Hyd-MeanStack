import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse',
  standalone: true
})
export class ReversePipe implements PipeTransform {

  //1 required parameter, rest optional parameters and return type
  transform(value: string, ...args: string[]): string {
    return value.split('').reverse().join('');
  }

}
