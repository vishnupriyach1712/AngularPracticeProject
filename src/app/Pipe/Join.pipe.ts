import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'joinWithComma',
})
export class JoinPipe implements PipeTransform {
  transform(input: Array<any>, sep = ', '): string {
    return input.join(sep);
  }
}
