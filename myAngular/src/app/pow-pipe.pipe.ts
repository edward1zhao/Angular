import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'powCalculator'
})
export class PowPipePipe implements PipeTransform {

  transform(value: number, factor?: number): number {
    return Math.pow(value, isNaN(factor)? 1: factor);
  }

}
